import DoneIcon from "icons/DoneIcon";
import InProgressIcon from "icons/InProgressIcon";
import ToDoIcon from "icons/ToDoIcon";
import { FC, ReactNode } from "react";

type CardTaskProps = {
  className?: string;
  id: number;
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

  const returnTag = (type: ReactNode, className: string) => {
    const Tag =  type as keyof JSX.IntrinsicElements;
    return <Tag className={className} />
  }

  return (
    <div className="group cursor-pointer p-1 flex gap-4 items-center text-white border-t-[.5px] border-b-[.5px] border-solid border-gray-400">
      <div className="pl-2">
        {
          // @ts-ignore
          returnTag(icons[status], "w-4 text-white group-hover:text-[green]")
        }
      </div>
      <div className="flex flex-col">
        <p>{ title }</p>
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default CardTask;