import { FC, useEffect } from "react";
import SectionBoard from "components/SectionBoard";
import RegistrationButton from "components/RegistrationButton";
import { useTasks } from "lib/Tasks.context";

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

const tasks = [
  {
    id: 1,
    title: "una",
    description: "something una",
    status: "todo"
  },
  {
    id: 2,
    title: "dos",
    description: "something dos",
    status: "inprogress"
  },
  {
    id: 3,
    title: "tres",
    description: "something tres",
    status: "done"
  },
  {
    id: 4,
    title: "cuatro",
    description: "something cuatro",
    status: "todo"
  },
  {
    id: 7,
    title: "cinco",
    description: "something cinco",
    status: "inprogress"
  },
  {
    id: 10,
    title: "seis",
    description: "something seis",
    status: "inprogress"
  },
  {
    id: 99,
    title: "siete",
    description: "something siete",
    status: "todo"
  },
  {
    id: 80,
    title: "ocho",
    description: "something ocho",
    status: "done"
  },
  {
    id: 34,
    title: "nueve",
    description: "something nueve",
    status: "inprogress"
  },
  {
    id: 99,
    title: "diez",
    description: "something diez",
    status: "done"
  },
]

const Board: FC<BoardProps> = ({ className }: BoardProps) => {

  const {
    setAllTasks,
    groupedTasks
  } = useTasks();
  
  useEffect(() => {
    setAllTasks(tasks)
  }, [])

  return (
    <section className="w-screen h-screen bg-black p-4 flex flex-col lg:flex-row gap-4">
      {
        Object.entries(status).map(([ key, { title } ]) =>
          // @ts-ignore
          <SectionBoard key={key} title={title} tasks={groupedTasks[key]} />
        )
      }
      <RegistrationButton />
    </section>
  )
}

export default Board;