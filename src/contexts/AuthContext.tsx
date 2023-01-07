import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { Loading } from "../components";

type EmailPasswordType = {
  email: string;
  password: string;
};

interface IAuthContext {
  user: User | null;
  loginWithFacebook: () => void;
  loginWithGoogle: () => void;
  loginWithEmail: ({ email, password }: EmailPasswordType) => void;
  signUpWithEmail: ({ email, password }: EmailPasswordType) => void;
  signOut: () => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  loginWithFacebook: () => {},
  loginWithGoogle: () => {},
  loginWithEmail: (EmailPasswordType) => {},
  signUpWithEmail: (EmailPasswordType) => {},
  signOut: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const loginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  const loginWithEmail = ({ email, password }: EmailPasswordType) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

  const signUpWithEmail = ({ email, password }: EmailPasswordType) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signOut = () => {
    auth.signOut();
  };

  const value = {
    user: currentUser,
    loginWithFacebook,
    loginWithGoogle,
    loginWithEmail,
    signUpWithEmail,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
