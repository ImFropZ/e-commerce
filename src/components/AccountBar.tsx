import { Link } from "react-router-dom";
import { CartIcon } from "../assets/svg";

function AccountBar() {
  return (
    <div className="fixed bottom-0 w-screen flex justify-center">
      <div
        className="absolute -top-11 bg-secondary aspect-sqaure
      rounded-full h-20 w-20 -z-10 overflow-hidden flex justify-center pt-3"
      >
        <Link to="/cart">
          <span className="cursor-pointer">
            <img src={CartIcon} alt="CartIcon" />
          </span>
        </Link>
      </div>
      <div className="h-14 w-full bg-primary flex items-center justify-center flex-col z-10">
        <Link to="/login">
          <div className="px-5 py-1 bg-secondary rounded-lg cursor-pointer">
            Login
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AccountBar;
