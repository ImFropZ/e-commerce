import { connect, ConnectedProps } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { RootState } from "../redux";

function UnauthRoute({ user }: PropsFromRedux) {
  return !user.data ? <Outlet /> : <Navigate to={"/"} />;
}

const mapState = (state: RootState) => {
  return {
    user: state.user,
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UnauthRoute);
