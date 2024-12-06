import { NavLink, useRouteLoaderData } from "react-router-dom";
import pigLogo from "../assets/pig_icon.png";

export default function Header() {
  const token = useRouteLoaderData("root");
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
          {token === null ? (
            <>
              <NavLink
                to="/auth/log-in"
                className="block  text-bright-white bg-money-green rounded hover:text-light-grey"
              >
                Login
              </NavLink>

              <NavLink
                to="/auth/sign-up"
                className="block  text-bright-white bg-money-green rounded"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/user"
                className="block  text-bright-white bg-money-green rounded"
              >
                USER INFO
              </NavLink>
              <NavLink
                to="/auth/logout"
                className="block  text-bright-white bg-money-green rounded"
              >
                Logout
              </NavLink>
            </>
          )}
        </div>
      </header>
    </>
  );
}
