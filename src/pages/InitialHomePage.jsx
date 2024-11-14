import { NavLink } from "react-router-dom";

export default function InitialHomePage() {
  return (
    <>
      <div className="flex h-screen ">
        <div className="flex-col m-auto">
          <h1 className="text-9xl text-bold text-dark-green">SMART SPEND</h1>
          <h2 className="text-3xl text-center mb-10">
            Track your income and expenses effortlessly
          </h2>
          <div className="flex justify-center">
            <NavLink
              to="/log-in"
              className="text-1xl p-5 m-2 rounded-lg bg-money-green"
            >
              Let's Budget
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
