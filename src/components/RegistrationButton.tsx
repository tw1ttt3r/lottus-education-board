import RegistrationIcon from "icons/RegistrationIcon";
import { useState } from "react";
import ModalRegistration from "components/ModalRegistration";

const RegistrationButton = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <>
      <span onClick={() => setOpen(!open)} className="group hover:bg-white absolute bottom-10 right-10 bg-gray-500 rounded cursor-pointer">
        <RegistrationIcon className="text-white w-6 group-hover:text-[green]" />
      </span>
      <ModalRegistration onChange={(status: boolean) => setOpen(status) } open={open} />
    </>
  )
}

export default RegistrationButton;