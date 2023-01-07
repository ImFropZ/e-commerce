import { useEffect, useState } from "react";
import { LoadingIcon } from "../assets/svg";

function Loading() {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setActive((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  const animationStyling = {
    active: "before:scale-[200%] after:scale-[300%]",
    noActive: "before:scale-0 after:scale-0",
  };
  return (
    <div className="h-screen w-screen grid place-content-center">
      <span
        className={`relative h-20 w-20 rounded-full grid place-content-center bg-white before:duration-700 before:transition-all before:content-[''] before:bg-lime-300 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-full before:-z-10 after:duration-500 after:transition-all after:content-[''] after:bg-lime-100 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:rounded-full after:-z-20  ${
          active ? animationStyling.active : animationStyling.noActive
        }`}
      >
        <img src={LoadingIcon} alt="loading icon" className="animate-spin"/>
      </span>
    </div>
  );
}

export default Loading;
