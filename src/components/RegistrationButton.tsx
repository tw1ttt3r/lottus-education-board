import RegistrationIcon from "icons/RegistrationIcon";
import { useModalStatus } from "lib/Modal.context";

const RegistrationButton = () => {

  const { setStatusModal } = useModalStatus();

  return (
    <>
      <span onClick={() => setStatusModal(true)} className="group hover:bg-white fixed bottom-10 right-10 bg-gray-500 rounded cursor-pointer">
        <RegistrationIcon className="text-white w-12 group-hover:text-[green]" />
      </span>
    </>
  )
}

export default RegistrationButton;