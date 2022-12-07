import { CartIcon } from "../assets/svg";

function AccountBar() {
  return (
    <div className="fixed bottom-0 w-screen flex justify-center">
      <div
        className="absolute -top-11 bg-secondary aspect-sqaure
      rounded-full h-20 w-20 -z-10 overflow-hidden flex justify-center pt-3"
      >
        <span className="cursor-pointer">
          <img src={CartIcon} alt="CartIcon" />
        </span>
      </div>
      <div className="h-14 w-full bg-primary flex items-center justify-center flex-col z-10">
        <div className="px-5 py-1 bg-[#EBEBE8] rounded-lg">Login</div>
      </div>
    </div>
  );
}

export default AccountBar;
