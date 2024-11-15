import { NavLink } from "react-router-dom";
import AdFeatures from "../components/AdFeatures";

export default function LogIn() {
  return (
    <section className="flex m-4">
      <div className="mr-8">
        <div>
          <h2 className="text-2xl text-dark-green font-bold">
            Log in to SMART SPEND
          </h2>
          <div className="mb-2">
            <label
              htmlFor="email-input"
              className="font-semibold text-dark-green"
            >
              Email
            </label>
            <input
              type="email"
              id="email-input"
              className="w-full h-10 px-3 text-sm text-light-grey border  border-dark-green focus:outline-none rounded shadow-sm"
              placeholder="user@mail.com"
            />
          </div>

          <div>
            <label
              htmlFor="password-input"
              className="font-semibold text-dark-green"
            >
              Password
            </label>
            <input
              type="password"
              id="password-input"
              className="w-full h-10 px-3 text-sm text-light-grey border  border-dark-green focus:outline-none rounded shadow-sm"
              placeholder="password input"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4 ">
          <button
            type="button"
            className="text-bright-white bg-money-green hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Log In
          </button>

          <NavLink
            to="/sign-up"
            className=" text-money-green bg-bright-white hover:bg-light-grey focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Don't have an account? Create one with us!
          </NavLink>
        </div>
      </div>

      <div className=" text-wrap">
        <AdFeatures />
      </div>
    </section>
  );
}
