import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BackIcon } from "../assets/svg";
import { authSignOut, RootState } from "../redux";

function Profile({ user, signOut }: PropsFromRedux) {
  const [name, setName] = useState<string>(user?.displayName || "");
  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleBack = () => {
    nav("/");
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[18em] md:w-[36em] flex flex-col items-center mt-3">
        <img
          src={BackIcon}
          alt="Back Icon"
          className="self-start cursor-pointer"
          onClick={handleBack}
        />
        <div className="w-40 h-40 overflow-hidden rounded-full outline outline-slate-400">
          <img
            src={user?.photoURL || ""}
            alt="Profile Picture"
            className="w-full h-full"
          />
        </div>
      </div>
      <form
        className="grid w-[18em] md:w-[36em] gap-y-6"
        onSubmit={handleSubmit}
      >
        <div className="section">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="text-field"
            id="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="section">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="text-field text-slate-500"
            disabled
            placeholder="example123@gmail.com"
            value={user?.email || ""}
          />
        </div>
        <div className="section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="text-field text-slate-500"
            disabled
            value="password"
          />
          <div className="reset-password">
            <Link to={"/forgot-password"}>Reset password?</Link>
          </div>
        </div>
        <div className="action">
          <button
            className="logout btn"
            type="button"
            onClick={() => signOut()}
          >
            Log out
          </button>
          <input
            type="submit"
            value="Submit"
            disabled={name === user?.displayName}
            className="btn submit disabled:bg-green-300 disabled:cursor-not-allowed"
          />
        </div>
      </form>
    </div>
  );
}

const mapState = (state: RootState) => {
  return {
    user: state.user.data,
  };
};

const mapDispatch = {
  signOut: () => authSignOut(),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Profile);
