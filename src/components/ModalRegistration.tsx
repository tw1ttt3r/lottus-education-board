import Input from "components/Input";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import TextArea from "components/TextArea";
import Button from "components/Button";
import CloseIcon from "icons/CloseIcon";
import { useTasks } from "lib/Tasks.context";
import { useModalStatus } from "lib/Modal.context";
import { Tooltip } from "@mui/material";

const ModalRegistration: FC = _ => {

  const [ titleTask, setTitleTask ] = useState("")
  const [ descriptionTask, setDescriptionTask ] = useState("")
  const [ idTask, setIdTask ] = useState("")
  const [ validations, setValidations ] = useState({ title: true, description: true })

  const {
    createTask,
    editedTask
  } = useTasks();

  const {
    setStatusModal,
    statusModal,
    currentTask,
    modeEdition
  } = useModalStatus();


  useEffect(() => {
    setTitleTask(modeEdition && !!currentTask ? currentTask.title : "")
    setDescriptionTask(modeEdition && !!currentTask ? currentTask.description : "")
    setIdTask(modeEdition && !!currentTask ? currentTask.id : "")
  }, [modeEdition])

  const closeModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      cleanModal()
      setStatusModal(false)
      return
    }
  }

  useEffect( () => {
    document.body.addEventListener("keyup", closeModal, false)
    return (
      document.body.removeEventListener("keyup", closeModal, true)
    )
  }, [])

  const updateTitle = (value: string) => {
    setTitleTask(value)
    setValidations({ ...validations, title: !!value })
  }

  const updateDescription = (value: string) => {
    setDescriptionTask(value)
    setValidations({ ...validations, description: !!value })
  }

  const saveTask = () => {
    setValidations({ title: !!titleTask, description: !!descriptionTask })
    if (!(!!titleTask && !!descriptionTask)) return 
    if (!modeEdition) {
      createTask(titleTask, descriptionTask)
    } else {
      editedTask(titleTask, descriptionTask, idTask)
    }
    setStatusModal(false)
    cleanModal()
  }

  const cleanModal = () => {
    setTitleTask("")
    setDescriptionTask("")
    setIdTask("")
    setValidations({ title: true, description: true })
  }

  return (
    <section className={cn("fixed w-screen h-screen top-0 left-0 bg-[black] items-center justify-center", { "flex": statusModal, "hidden": !statusModal })}>
      <Tooltip title="Cerrar" placement="left">
        <span onClick={() => {
          cleanModal()
          setStatusModal(false)
        }} className="absolute top-4 right-10">
          <CloseIcon className="w-4 text-white cursor-pointer" />
        </span>
      </Tooltip>
      <div className="flex flex-col gap-2">
        <div>
          <Input value={titleTask} label="Título" onChange={(value: string) => updateTitle(value)} />
          { !validations.title && <p className="text-[red]">Este campo no puede quedar vacio</p> }
        </div>
        <div>
          <TextArea value={descriptionTask} label="Descripción" onChange={(value: string) => updateDescription(value)} />
          { !validations.description && <p className="text-[red]">Este campo no puede quedar vacio</p> }
        </div>
        <Button className="text-white" label="Guardar" onClick={saveTask} />
      </div>
    </section>
  )
}

export default ModalRegistration;