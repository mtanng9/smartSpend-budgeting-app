import AdFeatures from "./AdFeatures";

export default function SignUp() {
  return (
    <section>
      <div>
        <h2 className="text-dark-green font-bold">Create Your Account</h2>
        <div>
          <label
            htmlFor="email-input"
            className="font-semibold text-dark-green"
          >
            Email
          </label>
          <input
            type="email"
            id="email-input"
            className="w-full h-10 px-3 text-sm text-light-grey border border-r-0 rounded-r-none border-dark-green focus:outline-none rounded shadow-sm"
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
            className="w-full h-10 px-3 text-sm text-light-grey border border-r-0 rounded-r-none border-dark-green focus:outline-none rounded shadow-sm"
            placeholder="password input"
          />
        </div>

        <button
          type="button"
          class="text-bright-white bg-money-green hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Sign Up
        </button>

        <button
          type="button"
          class="text-money-green bg-bright-white hover:bg-light-grey focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Log In Instead
        </button>
      </div>

      <AdFeatures />
    </section>
  );
}
