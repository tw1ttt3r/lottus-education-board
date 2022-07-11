import { FC } from "react";

type ArrowRightIconProps = {
  className?: string;
}

const ArrowRightIcon: FC<ArrowRightIconProps> = ({ className }: ArrowRightIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 490.4 490.4"
      version="1.1"
      viewBox="0 0 490.4 490.4"
      xmlSpace="preserve"
      className={className}
    >
      <path fill="currentColor" d="M245.2 490.4c135.2 0 245.2-110 245.2-245.2S380.4 0 245.2 0 0 110 0 245.2s110 245.2 245.2 245.2zm0-465.9c121.7 0 220.7 99 220.7 220.7s-99 220.7-220.7 220.7-220.7-99-220.7-220.7 99-220.7 220.7-220.7z"></path>
      <path fill="currentColor" d="M138.7 257.5h183.4l-48 48c-4.8 4.8-4.8 12.5 0 17.3 2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6l68.9-68.9c4.8-4.8 4.8-12.5 0-17.3l-68.9-68.9c-4.8-4.8-12.5-4.8-17.3 0s-4.8 12.5 0 17.3l48 48H138.7c-6.8 0-12.3 5.5-12.3 12.3 0 6.8 5.5 12.2 12.3 12.2z"></path>
    </svg>
  );
}

export default ArrowRightIcon;