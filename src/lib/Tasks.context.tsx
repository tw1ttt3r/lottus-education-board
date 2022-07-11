import { nanoid } from "nanoid";
import { Context, createContext, ReactNode, useContext, useEffect, useState } from "react";
import useLocalStorage from "lib/useLocalStorage";


export type Task = {
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
  deleteTask: (id: string) => void;
  editedTask: (title: string, description: string, id: string) => void;
  changeStatusTask: (id: string) => void;
}

const TasksContext = createContext<TasksContextProps | null>(null);
TasksContext.displayName = "TasksContext";

type TasksProviderProps = {
  children: ReactNode;
}

// Generated this context to manage all actions (add, edit, update, delete) in each card
const TasksContextProvider = ({ children }: TasksProviderProps) => {

  const { tasks, setTasks } = useLocalStorage();

  const newId = () => nanoid(5);

  const [ allTasks, setAllTasks ] = useState<Array<Task>>([])
  const [ groupedTasks, setGroupedTask ] = useState({})
  const createTask = (title: string, description: string) => {
    const newAllTasks = [ ...allTasks, { title, description, status: "todo", id: newId() } ]
    setAllTasks(newAllTasks)
    updateLocalStorage(newAllTasks)
  }

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

  useEffect( () => {
    if (JSON.stringify(tasks) !== JSON.stringify(allTasks)) setAllTasks(tasks);
  }, [tasks])

  const deleteTask = (id: string) => {
    const preserveTasks = allTasks.filter( task => task.id !== id)
    setAllTasks(preserveTasks)
    updateLocalStorage(preserveTasks)
  } 
  
  const changeStatusTask = (id: string) => {
    const changedTasks = allTasks.map( task => task.id === id ? { ...task, status: task.status === "todo" ? "inprogress" : "done" } : { ...task })
    setAllTasks(changedTasks)
    updateLocalStorage(changedTasks)
  } 

  const editedTask = (title: string, description: string, id: string) => {
    const changedTasks = allTasks.map( task => task.id === id ? { ...task, title, description } : { ...task })
    setAllTasks(changedTasks)
    updateLocalStorage(changedTasks)
  }

  const updateLocalStorage = (tasks: Task[]) => setTasks(tasks)

  // Exposing variables and methods to use in any component or lib
  const values = {
    tasks: allTasks,
    groupedTasks,
    setAllTasks,
    createTask,
    deleteTask,
    editedTask,
    changeStatusTask
  };

  return (
    <TasksContext.Provider value={values}>
      {children}
    </TasksContext.Provider>
  )
}

// created a hook to consume all items exposing from Context Provider
export const useTasks = () => {
  const {
    tasks,
    setAllTasks,
    groupedTasks,
    createTask,
    deleteTask,
    editedTask,
    changeStatusTask
  } = useContext(TasksContext as Context<TasksContextProps>);

  return {
    tasks,
    setAllTasks,
    groupedTasks,
    createTask,
    deleteTask,
    editedTask,
    changeStatusTask
  }
}


export default TasksContextProvider;