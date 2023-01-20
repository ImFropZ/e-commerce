import { User } from "firebase/auth";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Outlet } from "react-router-dom";
import { AccountBar, Header, Loading } from "../components";
import { auth } from "../config/firebase";
import { initialProducts, RootState, userActions } from "../redux";

function Default({ loading, initUser, initProducts }: PropsFromRedux) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      initUser(user);
    });
    initProducts();

    return unsubscribe;
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Outlet />
      <div className="h-[6.5em]" />
      <AccountBar />
    </>
  );
}

const mapState = (state: RootState) => {
  return {
    loading: state.product.loading && state.user.loading,
  };
};

const mapDispatch = {
  initUser: (user: User | null) => userActions.initUser(user),
  initProducts: () => initialProducts(),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Default);
