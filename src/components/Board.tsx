import { FC } from "react";
import SectionBoard from "components/SectionBoard";
import RegistrationButton from "components/RegistrationButton";
import { useTasks } from "lib/Tasks.context";
import ModalRegistration from "components/ModalRegistration";

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

  const {
    groupedTasks
  } = useTasks();

  return (
    <section className="w-screen h-screen bg-black p-4 xs:grid xs:grid-rows-3 lg:flex flex-col lg:flex-row gap-4 overflow-y-auto">
      {
        Object.entries(status).map(([ key, { title } ]) =>
          // @ts-ignore
          <SectionBoard key={key} title={title} tasks={groupedTasks[key]} />
        )
      }
      <RegistrationButton />
      <ModalRegistration />
    </section>
  )
}

export default Board;