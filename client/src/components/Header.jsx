import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-slate-500">Bangla</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2 sm:p-3 rounded-lg flex items-center justify-between">
          <input
            className="bg-transparent outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search here..."
          />
          <FaSearch className="text-slate-700" />
        </form>
        <ul className="flex gap-4 font-semibold">
          <li className="hidden sm:inline text-slate-700 hover:text-slate-500 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:text-slate-500 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="text-slate-700 hover:text-slate-500 hover:underline">
            <Link to="sign-in">Sign in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
