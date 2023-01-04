import { Link, useNavigate } from "react-router-dom";
import { CartIcon, Setting } from "../assets/svg";
import { useAuthContext } from "../contexts/AuthContext";
import useAlert from "../hooks/useAlert";

function AccountBar() {
  const { Alert, updateAlert } = useAlert({ type: "FADE" });
  const { user, signOut } = useAuthContext();
  const nav = useNavigate();
  const handleCart = () => {
    if (user) return nav("/cart");
    updateAlert({
      type: "WARNING",
      message: "You need to login first before using cart.",
    });
  };

  console.log(user?.photoURL);

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
        rounded-full h-20 w-20 -z-10 overflow-hidden flex justify-center pt-3 outline outline-1 outline-slate-400"
        >
          <span className="cursor-pointer" onClick={handleCart}>
            <img src={CartIcon} alt="CartIcon" />
          </span>
        </div>
        <div
          className={`h-14 w-full bg-primary z-10 flex ${
            user ? AUTH.USER : AUTH.LOGIN
          }`}
        >
          {user ? (
            <div className="flex gap-3 items-center">
              <img
                src={user?.photoURL || "#"}
                alt="IMG"
                className="h-12 aspect-square bg-slate-800 rounded-full overflow-hidden"
              />
              <span>{user?.displayName}</span>
            </div>
          ) : (
            <Link to="/login">
              <div className="px-5 py-1 bg-secondary rounded-lg cursor-pointer">
                Login
              </div>
            </Link>
          )}
          {/* <img
            src={Setting}
            alt="Setting"
            className="cursor-pointer"
            onClick={signOut}
          /> */}
          {user ? (
            <div className="cursor-pointer" onClick={signOut}>
              Log out
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default AccountBar;
