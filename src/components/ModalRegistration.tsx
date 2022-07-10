import Input from "components/Input";
import cn from "classnames";
import { FC, useEffect, useState } from "react";
import TextArea from "components/TextArea";
import Button from "components/Button";
import CloseIcon from "icons/CloseIcon";
import { useTasks } from "lib/Tasks.context";

type ModalRegistrationProps = {
  open: boolean;
  onChange: (status: boolean) => void
}

const ModalRegistration: FC<ModalRegistrationProps> = ({ open, onChange }: ModalRegistrationProps) => {

  const [ status, setStatus ] = useState(open)
  const [ titleTask, setTitleTask ] = useState("")
  const [ descriptionTask, setDescriptionTask ] = useState("")
  const [ validations, setValidations ] = useState({ title: true, description: true })

  const {
    createTask
  } = useTasks();

  useEffect(() => {
    setStatus(open)
  }, [open])

  const closeModal = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      cleanModal()
      setStatus(false)
      onChange(false)
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
    console.log({ title: titleTask, description: descriptionTask })
    createTask(titleTask, descriptionTask)
    setValidations({ title: !!titleTask, description: !!descriptionTask })
    setStatus(false)
    onChange(false)
    cleanModal()
  }

  const cleanModal = () => {
    setTitleTask("")
    setDescriptionTask("")
    setValidations({ title: true, description: true })
  }

  return (
    <section className={cn("fixed w-screen h-screen bg-[black] opacity-75 items-center justify-center", { "flex": status, "hidden": !status })}>
      <span onClick={() => {
        cleanModal()
        setStatus(false)
        onChange(false)
      }} className="absolute top-4 right-10">
        <CloseIcon className="w-4 text-white cursor-pointer" />
      </span>
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