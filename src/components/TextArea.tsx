import { FC, useEffect, useState } from "react";
import cn from "classnames";

type TextAreaProps = {
  className?: string
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
}

const TextArea: FC<TextAreaProps> = ({ className, label, onChange, value = "" }: TextAreaProps) => {

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
      <textarea value={newValue} onChange={changeInput} className={cn("font-content bg-transparent p-4 text-white outline-none border-2 border-solid border-white rounded",className)}></textarea>
    </div>
  )
}

export default TextArea;