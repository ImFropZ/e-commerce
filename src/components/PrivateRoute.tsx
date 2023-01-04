import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function PrivateRoute() {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoute;
