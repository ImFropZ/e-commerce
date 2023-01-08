import { browserSessionPersistence, setPersistence } from "firebase/auth";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "../assets/svg";
import { auth } from "../config/firebase";
import { schema } from "../config/Joi";
import { useAuthContext } from "../contexts/AuthContext";

function Login() {
  const { loginWithFacebook, loginWithGoogle, loginWithEmail } =
    useAuthContext();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current === null) return;
    const { email, password, rememberMe } = formRef.current;

    const LoginInfo = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = schema.validate(LoginInfo);
      if (res.error) {
        return;
      }
    } catch (err) {
      console.error(err);
      return;
    }

    if (rememberMe?.checked === false) {
      setPersistence(auth, browserSessionPersistence).then(() => {
        return loginWithEmail(LoginInfo);
      });
    } else {
      loginWithEmail(LoginInfo);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-mono text-primary-900">Login</h1>
      <form
        className="w-full flex flex-col items-center"
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col items-end">
          <div className="login-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name=""
              id="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="opacity-0 absolute w-5 h-5 checkbox z-10 cursor-pointer"
              id="rememberMe"
            />
            <div className="w-5 h-5 bg-white rounded-full relative">
              <img
                src={Check}
                alt="CheckMark"
                className="absolute scale-150 opacity-0"
              />
            </div>
            <label htmlFor="rememberMe" className="px-2">
              Remember me
            </label>
          </div>
          <Link to="/forgot-password" className="underline">
            Forgot password?
          </Link>
        </div>
        <button type="submit" className="bg-primary px-6 py-1 my-2 rounded-lg">
          Login
        </button>
      </form>

      <div>
        Doesn't have an account?
        <Link to="/sign-up" className="underline text-primary-900">
          Create one
        </Link>
        .
      </div>
      <div>
        <h3 className="text-center my-3">Or Login With</h3>
        <div className="flex gap-20">
          <button
            className="px-5 py-2 rounded-xl bg-blue-600 text-slate-100"
            onClick={loginWithFacebook}
          >
            Facebook
          </button>
          <button
            className="px-5 py-2 rounded-xl bg-red-600 text-slate-100"
            onClick={loginWithGoogle}
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
