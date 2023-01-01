import { useState } from "react";
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

interface setAlertTypeProps {
  type: "FADE" | "CLOSE";
  durationInMs?: number;
}

function useAlert(props?: setAlertTypeProps) {
  const { type, durationInMs = 3000 } = props || {
    type: "CLOSE",
  };

  const [alert, setAlert] = useState<AlertProps>({
    type: "SUCCESS",
    message: "",
  });
  const [alertType, setAlertType] = useState<setAlertTypeProps>({
    type,
    durationInMs,
  });

  const updateAlert = (props?: AlertProps) => {
    // Guard for no param given
    if (props === undefined)
      return setAlert((prev) => {
        return { ...prev, message: "" };
      });

    const { type, message } = props;

    if (alertType?.type == "FADE") {
      setTimeout(() => {
        setAlert((prev) => {
          return { ...prev, message: "" };
        });
      }, alertType.durationInMs);
    }

    if (type === undefined)
      return setAlert((prev) => {
        return { ...prev, message };
      });
    setAlert((prev) => {
      return { ...prev, type, message };
    });
  };

  const changeAlertType = (props: setAlertTypeProps) => {
    setAlertType(props);
  };

  const Alert = () => {
    if (alert.message === "") return <></>;
    return (
      <div className="fixed bg-white border-slate-400 border-2 top-10 rounded-lg px-2 py-1 z-50 left-0 right-0 w-64 mx-auto flex items-center gap-2">
        <img
          src={ICON[alert.type || "SUCCESS"]}
          alt={alert.type}
          className="self-start"
        />
        <div>{alert.message}</div>
      </div>
    );
  };

  return { updateAlert, Alert, changeAlertType };
}

export default useAlert;
