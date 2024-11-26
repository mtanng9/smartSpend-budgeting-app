import { Form, NavLink, json, redirect } from "react-router-dom";
import AdFeatures from "../components/AdFeatures";

export default function LogIn() {
  return (
    <section className="flex m-4">
      <div className="mr-8">
        <div>
          <h2 className="text-2xl text-dark-green font-bold">
            Log in to SMART SPEND
          </h2>
          <Form method="post">
            <div className="mb-2">
              <label
                htmlFor="email-input"
                className="font-semibold text-dark-green"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email-input"
                className="w-full h-10 px-3 text-sm border  border-dark-green focus:outline-none rounded shadow-sm"
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
                name="password"
                id="password-input"
                className="w-full h-10 px-3 text-sm border  border-dark-green focus:outline-none rounded shadow-sm"
                placeholder="password input"
              />
            </div>

            <div className="flex flex-col mt-4 ">
              <button
                type="submit"
                className="text-bright-white bg-money-green hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Log In
              </button>
            </div>
          </Form>
        </div>

        <div className="flex flex-col mt-4 ">
          <NavLink
            to="/auth/sign-up"
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

export async function LoginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const body = {
    email: email,
    password: password,
  };

  const response = await fetch("http://localhost:8080/auth/signin", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });
  const respData = await response.json();
  if (!response.ok) {
    const err = response.error;
    console.log(respData.error);
    throw json({ error: `somthing went wrong: ${err}` });
  }

  localStorage.setItem("token", respData.token);
  return redirect("/auth/sign-up");
}
