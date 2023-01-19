import { User } from "firebase/auth";
import { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Outlet } from "react-router-dom";
import { AccountBar, Header } from "../components";
import { auth } from "../config/firebase";
import { userActions } from "../redux/user/userSlice";

function Default({ initUser }: PropsFromRedux) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      initUser(user);
    });

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
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Default);
