import { NavLink } from "react-router-dom";

export default function UserHomePage() {
  return (
    <>
      <section>
        <div className="flex justify-center flex-col">
          <h1 className="text-2xl font-bold text-dark-green">
            Account Snapshot
          </h1>
          <h2 className="text-xl font-semibold text-dark-green text-center">
            Your Balance is : $$
          </h2>
          <div className="flex justify-center space-x-6">
            <div>
              <label
                htmlFor="income-input"
                className="font-semibold text-alpine-green"
              >
                Income / Budget
              </label>
            </div>

            <div>
              <label
                htmlFor="income-input"
                className="font-semibold text-light-red"
              >
                Current Expense
              </label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-dark-green">
            Transaction History
          </h2>
          <h2>This is a random expense</h2>
          <h2>This is a random expense 2</h2>
          <NavLink
            to="/add-expense"
            className="text-bright-white bg-money-green hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add More Expenses{" "}
          </NavLink>
        </div>
      </section>
    </>
  );
}
