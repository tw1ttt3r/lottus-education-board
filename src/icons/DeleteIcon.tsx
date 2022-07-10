import { FC } from "react";

type TrashIconProps = {
  className?: string;
}

const TrashIcon: FC<TrashIconProps> = ({ className }: TrashIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 34.386 34.386"
      version="1.1"
      viewBox="0 0 34.386 34.386"
      xmlSpace="preserve"
      className={className}
    >
      <path fill="currentColor" d="M26.361 4.052h-3.564c.004-.039.021-.074.021-.114A3.943 3.943 0 0018.881 0h-4.125a3.943 3.943 0 00-3.938 3.938c0 .041.019.075.023.114H8.025c-1.656 0-3 1.344-3 3v1.167h24.333V7.052c.003-1.656-1.34-3-2.997-3zm-13.543-.114c0-1.068.87-1.938 1.938-1.938h4.125c1.067 0 1.938.869 1.938 1.938 0 .041.019.075.022.114h-8.046c.004-.039.023-.074.023-.114zM5.026 31.386c0 1.656 1.344 3 3 3H26.36c1.656 0 3-1.344 3-3V10.219H5.026v21.167zM24.193 13.72a1.001 1.001 0 012 0v17.373a1 1 0 11-2 0V13.72zm-5.332 0a1 1 0 112 0v17.373a1 1 0 11-2 0V13.72zm-5.335 0a1 1 0 012 0v17.373a1 1 0 11-2 0V13.72zm-5.333 0a1 1 0 012 0v17.373a1 1 0 11-2 0V13.72z"></path>
    </svg>
  );
}

export default TrashIcon;
