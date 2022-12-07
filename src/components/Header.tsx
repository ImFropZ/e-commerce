import { useState } from "react";
import { Logo } from "../assets/image";
import { Hamburger } from "../assets/svg";
import { Navigation } from "./card";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleHamburger = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative w-screen sm:h-24 h-16 bg-primary py-2 px-5 flex justify-center items-center">
      <img
        src={Logo}
        alt="Logo"
        className="h-full aspect-square overflow-hidden rounded-full shadow-lg"
      />
      <span
        className="ml-auto cursor-pointer sm:scale-150"
        onClick={handleHamburger}
      >
        <img src={Hamburger} alt="Hamburger" />
      </span>
      <ol
        className={`absolute top-full z-10 left-0 right-0 ${
          !isOpen ? "scale-y-0 -translate-y-1/2" : ""
        } transition-all duration-200`}
      >
        {Array.from(Array(5), (i) => {
          return <Navigation />;
        })}
      </ol>
    </div>
  );
}

export default Header;
