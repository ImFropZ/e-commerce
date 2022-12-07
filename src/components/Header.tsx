import { Hamburger } from "../assets/svg";

function Header() {
  return (
    <div className="w-screen h-16 bg-primary py-2 px-5 flex justify-center items-center">
      <img
        src=""
        alt=""
        className="h-full aspect-square overflow-hidden rounded-full bg-black shadow-lg"
      />
      <span className="ml-auto cursor-pointer">{<Hamburger />}</span>
    </div>
  );
}

export default Header;
