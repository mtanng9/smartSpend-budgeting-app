import { NavLink, useRouteLoaderData } from "react-router-dom";

export default function InitialHomePage() {
  const token = useRouteLoaderData("root");
  return (
    <>
      {token === null ? (
        <div className="flex h-screen ">
          <div className="flex-col m-auto">
            <h1 className="text-9xl text-bold text-dark-green">SMART SPEND</h1>
            <h2 className="text-2xl text-center mb-8">
              Track your income and expenses effortlessly
            </h2>
            <div className="flex justify-center">
              <NavLink
                to="/auth/log-in"
                className="hover:bg-alpine-green alpine-green text-bright-white text-1xl p-3 m-2 rounded-lg bg-money-green"
              >
                Let's Budget !
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <h1>HERES YOUR BUDGET</h1>
      )}
    </>
  );
}
