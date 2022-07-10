import { nanoid } from "nanoid";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
}

type TasksContextProps = {
  tasks: Array<Task>;
  groupedTasks: any;
  setAllTasks: (tasks: Array<Task>) => void;
  createTask: (title: string, description: string) => void;
}

const TasksContext = createContext<any>(null);
TasksContext.displayName = "TasksContext";

type TasksProviderProps = {
  children: ReactNode;
}

const TasksContextProvider = ({ children }: TasksProviderProps) => {

  const newId = () => nanoid(5);

  const [ allTasks, setAllTasks ] = useState<Array<Task>>([])
  const [ groupedTasks, setGroupedTask ] = useState({})
  const createTask = (title: string, description: string) => setAllTasks([ ...allTasks, { title, description, status: "todo", id: newId() } ])

  const tasksGrouped = () => {
    const grouped = allTasks.reduce( ( prev, curr ) => {
      if (!prev.hasOwnProperty(curr.status)) {
        return { ...prev, [curr.status]: [curr] }
      }
      // @ts-ignore
      return { ...prev, [curr.status]: [ ...prev[curr.status], curr] }
    },
    {});
    setGroupedTask(grouped)
  }

  useEffect( () => {
    tasksGrouped();
  }, [allTasks])


  const values = {
    tasks: allTasks,
    groupedTasks,
    setAllTasks,
    createTask
  };

  return (
    <TasksContext.Provider value={values}>
      {children}
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  const {
    tasks,
    setAllTasks,
    groupedTasks,
    createTask
  } = useContext(TasksContext);

  return {
    tasks,
    setAllTasks,
    groupedTasks,
    createTask
  }
}


export default TasksContextProvider;