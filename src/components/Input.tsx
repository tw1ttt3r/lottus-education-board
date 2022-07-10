import { FC, useEffect, useState } from "react";
import cn from "classnames";

type InputProps = {
  className?: string
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
}

const Input: FC<InputProps> = ({ className, label, onChange, value = "" }: InputProps) => {

  const [ newValue, setNewValue ] = useState(value)

  const changeInput = ({ target }: any) => {
    const { value } = (target as HTMLInputElement)
    setNewValue(value)
    if (!onChange) return
    onChange(value);
  }

  useEffect(() => {
    setNewValue(value)
  }, [value])

  return (
    <div className="flex flex-col">
      { !!label && <label className="text-white font-display">{label}: </label>}
      <input value={newValue} onChange={changeInput} className={cn("font-content bg-transparent p-4 text-white outline-none border-2 border-solid border-white rounded",className)} />
    </div>
  )
}

export default Input;