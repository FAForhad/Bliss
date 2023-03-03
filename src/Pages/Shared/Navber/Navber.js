import React from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const menu = (
    <>
      <li className="rounded-none">
        <Link
          to="/"
          title="New Products"
          className="lg:px-20 px-12 py-4 uppercase lg:border-r border-solid border-slate-900 text-md"
        >
          New
        </Link>
      </li>
      <li className="rounded-none">
        <Link
          to="/"
          title="New Products"
          className="lg:px-20 px-12 py-4 uppercase lg:border-r border-solid border-slate-900 text-md"
        >
          WoMan
        </Link>
      </li>
      <li className="rounded-none">
        <Link
          to="/"
          title="New Products"
          className="lg:px-20 px-12 py-4 hover:bg-gray-900  hover:text-lime-400 lg:border-r border-solid border-slate-900 text-md"
        >
          Man
        </Link>
      </li>
      <li className="rounded-none">
        <Link
          to="/"
          title="New Products"
          className="lg:px-20 px-12  uppercase lg:border-r border-solid border-slate-900 text-md"
        >
          New
        </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar justify-between py-3 px-0 border-b border-slate-900 border-solid bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <Link
            to="/"
            className="lg:px-24 px-12 py-3 uppercase lg:border-r border-solid border-x-slate-900 font-bold text-2xl"
          >
            Bliss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">{menu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;