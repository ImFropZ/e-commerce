import { Dash } from "../../assets/svg";
import { Link } from "react-router-dom";

type NavigationProps = {
  closeNav?: () => void;
};

function Navigation(Props: NavigationProps) {
  const { closeNav } = Props;
  return (
    <Link to="/" onClick={closeNav}>
      <li className="h-12 flex items-center px-4 text-lg cursor-pointer bg-secondary hover:bg-primary">
        <img src={Dash} alt="Dash" /> <p className="mb-1">Navigation</p>
      </li>
    </Link>
  );
}

export default Navigation;
