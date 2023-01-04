import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function UnauthRoute() {
  const { user } = useAuthContext();

  return !user ? <Outlet /> : <Navigate to={"/"} />;
}

export default UnauthRoute;
