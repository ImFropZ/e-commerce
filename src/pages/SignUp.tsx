import { FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "../assets/svg";

function SignUp() {
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (formRef.current === null) return;
    const { username, password, passwordAgain, termPolicy } = formRef.current;

    if (password.value !== passwordAgain.value || !termPolicy.checked) return;

    const signUpInfo = {
      username: username.value,
      password: password.value,
    };

    console.table(signUpInfo);
  }

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-3xl font-mono text-primary-900">Create an account</h1>
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
          <div className="login-input">
            <label htmlFor="passwordAgain">Password again</label>
            <input
              type="password"
              name=""
              id="passwordAgain"
              placeholder="Password again"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="opacity-0 absolute w-5 h-5 checkbox z-10 cursor-pointer"
              id="termPolicy"
            />
            <div className="w-5 h-5 bg-white rounded-full relative">
              <img
                src={Check}
                alt="CheckMark"
                className="absolute scale-150 opacity-0"
              />
            </div>
            <label htmlFor="termPolicy" className="px-2">
              Accept Term & Policy
            </label>
          </div>
        </div>
        <button type="submit" className="bg-primary px-6 py-1 my-2 rounded-lg">
          Sign Up
        </button>
      </form>

      <div>
        Have an account?
        <Link to="/login" className="underline text-primary-900">
          Login here
        </Link>
        .
      </div>
    </div>
  );
}

export default SignUp;
