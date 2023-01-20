import { User } from "firebase/auth";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Outlet } from "react-router-dom";
import { AccountBar, Header } from "../components";
import { auth } from "../config/firebase";
import { initialProducts, userActions } from "../redux";

function Default({ initUser, initProducts }: PropsFromRedux) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      initUser(user);
    });
    initProducts();

    return unsubscribe;
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <div className="h-[6.5em]" />
      <AccountBar />
    </>
  );
}

const mapDispatch = {
  initUser: (user: User | null) => userActions.initUser(user),
  initProducts: () => initialProducts(),
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Default);
