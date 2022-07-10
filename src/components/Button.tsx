import { FC } from "react";
import cn from "classnames";

type ButtonProps = {
  className?: string;
  label: string;
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ className, label, onClick }: ButtonProps) => {

  const handleClick = () => {
    if (!onClick) return
    onClick()
  }

  return (
    <button onClick={handleClick} className={cn("font-display bg-transparent hover:bg-white hover:text-black p-4 border-2 border-white border-solid", className)}>{ label }</button>
  )
}

export default Button;