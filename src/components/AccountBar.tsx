import { Link, useNavigate } from "react-router-dom";
import { CartIcon, Setting } from "../assets/svg";
import useAlert from "../hooks/useAlert";
import { isLogin, logout } from "../_helper";

function AccountBar() {
  const { Alert, updateAlert } = useAlert();
  const nav = useNavigate();
  const handleCart = () => {
    if (isLogin()) return nav("/cart");
    setTimeout(() => updateAlert(), 3000);
    updateAlert({
      type: "WARNING",
      message: "You need to login first before using cart.",
    });
  };

  const AUTH = {
    LOGIN: "items-center justify-center",
    USER: "justify-between items-center px-5",
  };

  return (
    <>
      <Alert />
      <div className="fixed bottom-0 w-screen flex justify-center">
        <div
          className="absolute -top-11 bg-secondary aspect-sqaure
        rounded-full h-20 w-20 -z-10 overflow-hidden flex justify-center pt-3"
        >
          <span className="cursor-pointer" onClick={handleCart}>
            <img src={CartIcon} alt="CartIcon" />
          </span>
        </div>
        <div
          className={`h-14 w-full bg-primary z-10 flex ${
            isLogin() ? AUTH.USER : AUTH.LOGIN
          }`}
        >
          {isLogin() ? (
            <div className="flex gap-3 items-center">
              <img
                src="#"
                alt="IMG"
                className="h-12 aspect-square bg-slate-800 rounded-full overflow-hidden"
              />
              <span>Username</span>
            </div>
          ) : (
            <Link to="/login">
              <div className="px-5 py-1 bg-secondary rounded-lg cursor-pointer">
                Login
              </div>
            </Link>
          )}
          <img
            src={Setting}
            alt="Setting"
            className="cursor-pointer absolute right-2"
            onClick={() => {
              logout();
              window.location.reload();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default AccountBar;
