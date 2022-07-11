import { FC } from "react";
import CardTask from "components/CardTask";

type SectionBoardProps = {
  className?: string;
  title?: string;
  tasks?: any[];
}

const SectionBoard: FC<SectionBoardProps> = ({ className, title, tasks }: SectionBoardProps) => {
  return (
    <div className="border-[1px] border-solid border-white w-full max-h-full p-1 overflow-y-auto scrollbar-hide">
      <p className="text-white fixed bg-[gray] px-1 rounded">{ title }</p>
      <section className="flex flex-col gap-2 mt-8">
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