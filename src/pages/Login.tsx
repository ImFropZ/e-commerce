import { useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "../assets/svg";

function Login() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-mono text-primary-900">Login</h1>
      <form
        className="w-full flex flex-col items-center"
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
      >
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
        <div className="flex gap-20">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="opacity-0 absolute w-5 h-5 checkbox z-10 cursor-pointer"
              // onClick={handleCheck}
              // ref={checkRef}
              id="remember-me"
            />
            <div className="w-5 h-5 bg-white rounded-full relative">
              <img
                src={Check}
                alt="CheckMark"
                className="absolute scale-150 opacity-0"
              />
            </div>
            <label htmlFor="remember-me" className="px-2">
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
