import { Context, createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Task } from "lib/Tasks.context";

type ModalContextProps = {
  statusModal: boolean,
  setStatusModal: (status: boolean) => void,
  currentTask: Task | null,
  editionTask: (task: Task) => void,
  modeEdition: boolean
}

const ModalContext = createContext<ModalContextProps | null>(null);
ModalContext.displayName = "ModalContext";

type ModalContextProviderProps = {
  children: ReactNode
}

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {

  const [ status, setStatus ] = useState(false)
  const [ currentTask, setCurrentTask ] = useState<Task | null>(null)
  const [ modeEdition, setModeEdition ] = useState(false)

  useEffect(() => {
    if (!status) {
      setCurrentTask(null)
      setModeEdition(false)
    }
  }, [status])

  const editionTask = (task: Task) => {
    setCurrentTask(task)
    setModeEdition(true)
  }

  const values = {
    statusModal: status,
    setStatusModal: setStatus,
    currentTask,
    editionTask,
    modeEdition
  }

  return (
    <ModalContext.Provider value={values}>
      { children }
    </ModalContext.Provider>
  )
}

export const useModalStatus = () => {
  const {
    statusModal,
    setStatusModal,
    currentTask,
    editionTask,
    modeEdition
  } = useContext(ModalContext as Context<ModalContextProps>)


  return {
    statusModal,
    setStatusModal,
    currentTask,
    editionTask,
    modeEdition
  }
}

export default ModalContextProvider;