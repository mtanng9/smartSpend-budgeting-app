import ResetExpense from "../components/ResetExpense";

export default function AddAnExpense() {
  return (
    <section>
      <h2 className="text-dark-green font-bold">Add an Expense</h2>
      <div>
        <label
          htmlFor="expense-type-input"
          className="font-semibold text-dark-green"
        >
          Name of Expense
        </label>
        <input
          type="text"
          id="expense-type-input"
          className="w-full h-10 px-3 text-sm text-light-grey border border-r-0 rounded-r-none border-dark-green focus:outline-none rounded shadow-sm"
          placeholder="Ex: Mortgage Payment"
        />
      </div>

      <div>
        <label
          htmlFor="amount-type-input"
          className="font-semibold text-dark-green"
        >
          Amount
        </label>
        <input
          type="text"
          id="amount-type-input"
          className="w-full h-10 px-3 text-sm text-light-grey border border-r-0 rounded-r-none border-dark-green focus:outline-none rounded shadow-sm"
          placeholder="Ex: $878"
        />
      </div>

      <button
        type="button"
        class="text-bright-white bg-money-green hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Add Expense
      </button>

      <ResetExpense />
    </section>
  );
}
