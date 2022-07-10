import { FC } from "react";
import CardTask from "components/CardTask";

type SectionBoardProps = {
  className?: string;
  title?: string;
  tasks?: any[];
}

const SectionBoard: FC<SectionBoardProps> = ({ className, title, tasks }: SectionBoardProps) => {
  return (
    <div className="border-[1px] border-solid border-white w-full h-full p-1">
      <p className="text-white">{ title }</p>
      <section className="flex flex-col gap-2 mt-4">
        {
          tasks?.map( (task, i) => <CardTask key={i} { ...task } /> )
        }
      </section>
    </div>
)
}

export default SectionBoard;