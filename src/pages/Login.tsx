import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check } from "../assets/svg";

import { UserAccount } from "../_helper/FakeAccount";

function Login() {
  const nav = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current === null) return;
    const { username, password, rememberMe } = formRef.current;

    const LoginInfo = {
      username: username.value,
      password: password.value,
      rememberMe: rememberMe.checked,
    };

    if (
      UserAccount.username === LoginInfo.username &&
      UserAccount.password === LoginInfo.password
    ) {
      localStorage.setItem("isAuth", "T");
      nav("/");
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name=""
              id="username"
              placeholder="Username"
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
        <div className="flex gap-20">
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
          <Link to="/forget-password" className="underline">
            Forget password?
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
          <button className="px-5 py-2 rounded-xl bg-blue-600 text-slate-100">
            Facebook
          </button>
          <button className="px-5 py-2 rounded-xl bg-red-600 text-slate-100">
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
