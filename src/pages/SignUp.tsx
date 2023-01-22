import { FormEvent, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { Check } from "../assets/svg";
import { schema } from "../config/Joi";
import { authentication, EmailPassword } from "../redux";

function SignUp(props: PropsFromRedux) {
  const formRef = useRef<HTMLFormElement>(null);
  const { signUpWithEmail } = props;

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (formRef.current === null) return;
    const { email, password, repeat_password, termPolicy } = formRef.current;

    if (!termPolicy.checked) return;

    try {
      const res = schema.validate({
        email: email.value,
        password: password.value,
        repeat_password: repeat_password.value,
      });
      if (res.error) return;
    } catch (err) {
      console.error(err);
      return;
    }

    const signUpInfo = {
      email: email.value,
      password: password.value,
    };

    signUpWithEmail(signUpInfo);
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
          <div className="login-input">
            <label htmlFor="repeat_password">Password again</label>
            <input
              type="password"
              name=""
              id="repeat_password"
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
              Accept{" "}
              <Link to={"/policies"} className="underline text-primary-900">
                Term & Policy
              </Link>
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

const mapDispatch = {
  signUpWithEmail: (obj: EmailPassword) =>
    authentication({ ...obj, platform: "SIGNUP_EMAIL" }),
};

const connector = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(SignUp);
