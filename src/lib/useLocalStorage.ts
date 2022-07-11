import { Task } from "lib/Tasks.context";

// created a hook 'cause isolated functionality allows us use it in multiple places
const useLocalStorage = () => {
  const key = "toDoLottus";

  const tasks = JSON.parse(localStorage.getItem(key) || "[]");

  const setTasks = (tasks: Task[]) => {
    localStorage.setItem(key, JSON.stringify(tasks));
  }

  // returned in this object all the tasks saved in local storage and a function to updated any change
  return {
    tasks,
    setTasks
  }
}

export default useLocalStorage;