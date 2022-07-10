import { FC } from "react";

type ToDoIconProps = {
  className?: string;
}

const ToDoIcon: FC<ToDoIconProps> = ({ className }: ToDoIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 92 92"
      xmlSpace="preserve"
      className={className}
    >
      <path fill="currentColor" d="M25 17.8V5c0-2.8 2.2-5 5-5s5 2.2 5 5v12.8c0 2.8-2.2 5-5 5s-5-2.2-5-5zm37 5c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5s-5 2.2-5 5v12.8c0 2.8 2.2 5 5 5zM28.2 40h35.5c2.2 0 4-1.8 4-4s-1.8-4-4-4H28.2c-2.2 0-4 1.8-4 4s1.8 4 4 4zM84 7h-8.3c-2.2 0-4 1.8-4 4s1.8 4 4 4H80v68H12V15h4.3c2.2 0 4-1.8 4-4s-1.8-4-4-4H8c-2.2 0-4 2.2-4 4.4V87c0 2.2 1.8 4 4 4h76c2.2 0 4-1.8 4-4V11.4C88 9.2 86.2 7 84 7zm-41.3 8h6.6c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6.6c-2.2 0-4 1.8-4 4s1.8 4 4 4zM28.2 58h35.5c2.2 0 4-1.8 4-4s-1.8-4-4-4H28.2c-2.2 0-4 1.8-4 4s1.8 4 4 4z"></path>
    </svg>
  );
}

export default ToDoIcon;