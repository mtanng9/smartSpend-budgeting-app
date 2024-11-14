import ResetExpense from "../components/ResetExpense";

export default function SetBudget() {
  return (
    <section>
      <h2 className="text-dark-green font-bold">Set Your Income/ Budget</h2>
      <div>
        <label htmlFor="amount-input" className="font-semibold text-dark-green">
          Enter Your Budget
        </label>
        <input
          type="number"
          id="amount-input"
          className="w-full h-10 px-3 text-sm text-light-grey border border-r-0 rounded-r-none border-dark-green focus:outline-none rounded shadow-sm"
          placeholder="Ex: $878"
        />
      </div>

      <button
        type="button"
        class="text-bright-white bg-money-green hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Set Budget
      </button>

      <ResetExpense />
    </section>
  );
}
