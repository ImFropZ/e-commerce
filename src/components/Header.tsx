import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/image";
import { Hamburger } from "../assets/svg";
import { RootState } from "../redux";
import { Navigation } from "./card";

function Header({ categories }: PropsFromRedux) {
  const nav = useNavigate();
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleHamburger = () => {
    setOpen((prev) => !prev);
  };

  const closeNavigation = () => {
    setOpen(false);
  };

  return (
    <div className="sticky top-0 h-16 bg-primary py-2 px-5 flex justify-center items-center z-30">
      <img
        src={Logo}
        alt="Logo"
        className="h-full aspect-square overflow-hidden rounded-full shadow-lg cursor-pointer"
        onClick={() => nav("/")}
      />
      <span
        className="ml-auto cursor-pointer sm:scale-110"
        onClick={handleHamburger}
      >
        <img src={Hamburger} alt="Hamburger" />
      </span>
      <ol
        className={`absolute top-full sm:left-auto z-50 left-0 right-0 ${
          !isOpen ? "scale-y-0 -translate-y-1/2" : ""
        } transition-all duration-200`}
      >
        <span
          className="fixed top-0 left-0 right-0 bottom-0 -z-10"
          onClick={() => setOpen(false)}
        />
        {categories.map((category) => {
          return (
            <Navigation
              closeNav={closeNavigation}
              key={category}
              categoryName={category}
            />
          );
        })}
      </ol>
    </div>
  );
}

const mapState = (state: RootState) => {
  return {
    categories: state.product.data.categories,
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Header);
