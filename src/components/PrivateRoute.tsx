import { connect, ConnectedProps } from "react-redux/es/exports";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

function PrivateRoute({ user }: PropsFromRedux) {
  return user.data ? <Outlet /> : <Navigate to={"/login"} />;
}

const mapState = (state: RootState) => {
  return {
    user: state.user,
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PrivateRoute);
