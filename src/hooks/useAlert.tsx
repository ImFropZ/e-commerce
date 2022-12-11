import { useState } from "react";
import { Modal } from "../components/modal";
import { Success, Info, Error, Warning } from "../assets/svg";

type AlertProps = {
  type?: "ERROR" | "WARNING" | "INFO" | "SUCCESS";
  message?: string;
};

const ICON = {
  ERROR: Error,
  WARNING: Warning,
  INFO: Info,
  SUCCESS: Success,
};

function useAlert() {
  const [alert, setAlert] = useState<AlertProps>({
    type: "SUCCESS",
    message: "",
  });

  const updateAlert = (props?: AlertProps) => {
    // Guard for no param given
    if (props === undefined)
      return setAlert((prev) => {
        return { ...prev, message: "" };
      });

    const { type, message } = props;

    if (type === undefined)
      return setAlert((prev) => {
        return { ...prev, message };
      });
    setAlert((prev) => {
      return { ...prev, type, message };
    });
  };

  const Alert = () => {
    if (alert.message === "") return <></>;
    return (
      <Modal>
        <div className="bg-white border-black border-2 top-10 relative rounded-xl px-2 py-1">
          <img src={ICON[alert.type || "SUCCESS"]} alt={alert.type} />
          <div>{alert.message}</div>
        </div>
      </Modal>
    );
  };

  return { updateAlert, Alert };
}

export default useAlert;
