import { Task } from "lib/Tasks.context";

const useLocalStorage = () => {
  const key = "toDoLottus";

  const tasks = JSON.parse(localStorage.getItem(key) || "[]");

  const setTasks = (tasks: Task[]) => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }

  return {
    tasks,
    setTasks
  }
}

export default useLocalStorage;