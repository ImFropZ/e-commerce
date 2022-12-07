import { Dash } from "../../assets/svg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Link to="/">
      <li className="h-12 flex items-center px-4 text-xl cursor-pointer bg-secondary hover:bg-primary">
        <img src={Dash} alt="Dash" /> <p className="mb-1">Navigation</p>
      </li>
    </Link>
  );
}

export default Navigation;
