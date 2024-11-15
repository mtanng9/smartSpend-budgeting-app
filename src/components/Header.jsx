import { NavLink } from "react-router-dom";
import pigLogo from "../assets/pig_icon.png";

export default function Header() {
  return (
    <>
      <header className="flex w-full justify-between bg-money-green">
        <div className="flex items-center justify-between p-4">
          <img
            src={pigLogo}
            className="h-12 mr-3"
            alt="a pig - logo of smart spend"
          />

          <div>
            <NavLink to="/" className="font-bold text-2xl text-dark-green">
              SMART SPEND
            </NavLink>
            <h2 className="text-1xl text-bright-white">
              Personal Budgeting App
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-2 m-5">
          <NavLink
            to="/"
            className="block  text-bright-white bg-money-green rounded hover:text-light-grey"
          >
            Home
          </NavLink>
          <NavLink
            to="/user-home-page"
            className="block  text-bright-white bg-money-green rounded hover:text-light-grey"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/log-in"
            className="block  text-bright-white bg-money-green rounded hover:text-light-grey"
          >
            Login
          </NavLink>
          <NavLink
            to="/sign-up"
            className="block  text-bright-white bg-money-green rounded"
          >
            Sign Up
          </NavLink>
        </div>
      </header>
    </>
  );
}
