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
      <section className="flex flex-col gap-2 mt-4 overflow-y-auto">
        {
          !!tasks?.length && tasks?.map( (task, i) => <CardTask key={i} { ...task } /> )
        }
        {
          !tasks?.length && <p className="text-[gray]">Sin Elementos</p>
        }
      </section>
    </div>
)
}

export default SectionBoard;