import { Tooltip } from "@mui/material";
import RegistrationIcon from "icons/RegistrationIcon";
import { useModalStatus } from "lib/Modal.context";

const RegistrationButton = () => {

  const { setStatusModal } = useModalStatus();

  return (
    <Tooltip title="Agregar Tarea" placement="left">
      <span onClick={() => setStatusModal(true)} className="group hover:bg-white fixed bottom-10 right-10 bg-gray-500 rounded cursor-pointer">
        <RegistrationIcon className="text-white w-12 group-hover:text-[green]" />
      </span>
    </Tooltip>
  )
}

export default RegistrationButton;