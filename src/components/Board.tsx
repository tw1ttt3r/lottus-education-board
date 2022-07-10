import { FC } from "react";

type BoardProps = {
  className?: string;
}

type Status = {
  [key: string]: {
    title: string;
    status: boolean;
  }
};

const status: Status = {
  todo: {
    title: "To Do",
    status: true
  },
  inprogress: {
    title: "In Progress",
    status: true
  },
  done: {
    title: "Done",
    status: true
  },
}

const Board: FC<BoardProps> = ({ className }: BoardProps) => {
  return (
    <section className="w-screen h-screen bg-black p-4 flex flex-col lg:flex-row gap-4">
      {
      
      Object.entries(status).map(([ key, { title } ]) => <div key={key} className="border-[1px] border-solid border-white w-full h-full p-1">
        <p className="text-white">{ title }</p>
      </div>)
      }
    </section>
  )
}

export default Board;