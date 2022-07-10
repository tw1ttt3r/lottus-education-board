import { FC } from "react";

type DoneIconProps = {
  className?: string
}

const DoneIcon: FC<DoneIconProps> = ({ className }: DoneIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4h5a1 1 0 000-2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-2a1 1 0 10-2 0v2H4V4zm11.207-1.707a1 1 0 00-1.414 0L8.5 7.586l-.793-.793a1 1 0 00-1.414 1.414l1.5 1.5a1 1 0 001.414 0l6-6a1 1 0 000-1.414z"
      ></path>
    </svg>
  );
}

export default DoneIcon;