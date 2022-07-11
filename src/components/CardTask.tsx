import TrashIcon from "icons/DeleteIcon";
import DoneIcon from "icons/DoneIcon";
import EditIcon from "icons/EditIcon";
import InProgressIcon from "icons/InProgressIcon";
import ToDoIcon from "icons/ToDoIcon";
import { useTasks } from "lib/Tasks.context";
import { FC, ReactNode, useState } from "react";
import ModalRegistration from "components/ModalRegistration";
import cn from "classnames";

type CardTaskProps = {
  className?: string;
  id: string;
  title: string;
  description: string;
  status: string;
}

const icons = {
  todo: ToDoIcon,
  inprogress: InProgressIcon,
  done: DoneIcon
}

const CardTask: FC<CardTaskProps> = ({ className, id, title, description, status }: CardTaskProps) => {

  const {
    deleteTask,
  } = useTasks()

  const returnTag = (type: ReactNode, className: string) => {
    const Tag =  type as keyof JSX.IntrinsicElements;
    return <Tag className={className} />
  }

  const [ open, setOpen ] = useState(false)


  return (
    <>
      <div className="group cursor-pointer p-1 flex gap-4 items-center text-white border-t-[.5px] border-b-[.5px] border-solid border-gray-400">
        <div className="pl-2">
          {
            // @ts-ignore
            returnTag(icons[status], cn("w-4 text-white", { "text-[gray]": status === "done", "group-hover:text-[green]": status !== "done" }))
          }
        </div>
        <div className={cn("flex flex-col flex-grow", { "text-[gray]": status === "done" })}>
          <p>{ title }</p>
          <p>{ description }</p>
        </div>
        <div className="flex gap-2 justify-center items-center">
          { (status === "todo" || status === "inprogress") && <span onClick={() => setOpen(!open)}><EditIcon className="w-4 hover:text-[yellow]" /></span> }
          { status === "todo" && <span onClick={() => deleteTask(id)}><TrashIcon className="w-4 hover:text-[red]" /></span> }
        </div>
      </div>
      <ModalRegistration id={id} title={title} description={description} onChange={(status: boolean) => setOpen(status) } open={open} />
    </>
  )
}

export default CardTask;