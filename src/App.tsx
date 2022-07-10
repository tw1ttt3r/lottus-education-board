import Board from "components/Board";
import TasksContextProvider from "lib/Tasks.context";

function App() {
  return (
    <TasksContextProvider>
      <Board />
    </TasksContextProvider>
  );
}

export default App;
