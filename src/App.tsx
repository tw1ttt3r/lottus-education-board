import Board from "components/Board";
import ModalContextProvider from "lib/Modal.context";
import TasksContextProvider from "lib/Tasks.context";

function App() {
  return (
    <TasksContextProvider>
      <ModalContextProvider>
        <Board />
      </ModalContextProvider>
    </TasksContextProvider>
  );
}

export default App;
