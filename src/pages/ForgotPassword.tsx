import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { schema } from "../config/Joi";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const nav = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current === null) return;
    const { email } = formRef.current;

    console.log(email.value);

    try {
      const res = schema.validate({ email: email.value.toString() });
      if (res.error) {
        return;
      }
    } catch (err) {
      console.error(err);
      return;
    }

    sendPasswordResetEmail(auth, email.value);
    nav("/login");
  };

  return (
    <div className="flex flex-col items-center mt-5 gap-3 bg-primary w-fit mx-auto px-10 py-5 rounded-lg">
      <h1 className="text-3xl">Forgot Password?</h1>
      <p>Please enter your email to reset your password.</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
        ref={formRef}
      >
        <div className="flex gap-2 items-center">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="p-1 outline-none bg-slate-200 active:bg-white focus:bg-white"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="self-end bg-primary-900 px-3 py-1 rounded text-white cursor-pointer"
        />
      </form>
    </div>
  );
}

export default ForgotPassword;
