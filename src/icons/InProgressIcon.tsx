import { FC } from "react";

type InProgressIconProps = {
  className?: string;
}

const InProgressIcon: FC<InProgressIconProps> = ({ className }: InProgressIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 33 33"
      version="1.1"
      viewBox="0 0 33 33"
      xmlSpace="preserve"
      className={className}
    >
      <path fill="currentColor" d="M16.5 0C7.402 0 0 7.402 0 16.5 0 25.598 7.402 33 16.5 33 25.598 33 33 25.598 33 16.5 33 7.402 25.598 0 16.5 0zm0 29C9.607 29 4 23.393 4 16.5S9.607 4 16.5 4 29 9.607 29 16.5 23.393 29 16.5 29zm2.469-21.031v9.938a2 2 0 01-2 2h-6.938a2 2 0 010-4h4.938V7.969a2 2 0 014 0z"></path>
    </svg>
  );
}

export default InProgressIcon;
