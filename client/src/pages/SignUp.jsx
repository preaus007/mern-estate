import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form className="flex flex-col gap-4 px-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase font-semibold transition duration-300 hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-3 px-4">
        <p>Already have an account?</p>
        <span className="text-blue-700">
          <Link to={"sign-in"}>Log in</Link>
        </span>
      </div>
    </div>
  );
}
