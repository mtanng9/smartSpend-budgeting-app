import { NavLink, Form, redirect, json } from "react-router-dom";
import AdFeatures from "../components/AdFeatures";

export default function SignUp() {
  return (
    <section className="flex m-4">
      <div className="mr-8">
        <h2 className="text-2xl text-dark-green font-bold">
          Create Your Account
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
              id="email-input"
              name="email"
              className="w-full h-10 px-3 text-sm  border  border-dark-green focus:outline-none rounded shadow-sm"
              placeholder="user@mail.com"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password-input"
              className="font-semibold text-dark-green"
            >
              Password
            </label>
            <input
              type="password"
              id="password-input"
              name="password"
              className="w-full h-10 px-3 text-sm  border  border-dark-green focus:outline-none rounded shadow-sm"
              placeholder="password input"
            />
          </div>

          <div className="flex flex-col mt-4 ">
            <button
              type="submit"
              class="text-bright-white bg-money-green hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign Up
            </button>
          </div>
        </Form>

        <div className="flex flex-col mt-4 ">
          <NavLink
            to="/auth/log-in"
            className="text-money-green bg-bright-white hover:bg-light-grey focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Log In Instead
          </NavLink>
        </div>
      </div>

      <div className=" text-wrap">
        <AdFeatures />
      </div>
    </section>
  );
}

export async function SignUpAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const body = {
    email: email,
    password: password,
  };

  const response = await fetch("http://localhost:8080/auth/signup", {
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
