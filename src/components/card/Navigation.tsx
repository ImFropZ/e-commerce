import { Dash } from "../../assets/svg";
import { Link } from "react-router-dom";

type NavigationProps = {
  closeNav?: () => void;
  categoryName: string;
};

function Navigation(props: NavigationProps) {
  const { closeNav, categoryName } = props;

  console.log(window.location.pathname === `/category/${categoryName}`);

  return (
    <Link
      to={`/category/${categoryName.split(" ").join("+")}`}
      onClick={closeNav}
    >
      <li
        className={`h-12 flex items-center px-4 text-lg cursor-pointer bg-secondary hover:bg-primary ${
          window.location.pathname === `/category/${categoryName.split(" ").join("+")}`
            ? "bg-primary"
            : "bg-auto"
        }`}
      >
        <img src={Dash} alt="Dash" />{" "}
        <p className="mb-1 capitalize">{categoryName}</p>
      </li>
    </Link>
  );
}

export default Navigation;
