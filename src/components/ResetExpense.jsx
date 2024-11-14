export default function ResetExpense() {
  return (
    <>
      <section>
        <h2 className="text-dark-green font-bold">Reset your expense</h2>

        <div>
          <label
            htmlFor="amount-input"
            className="font-semibold text-dark-green"
          >
            Reset your expense back to zero
          </label>

          <button
            type="button"
            class="text-bright-white bg-light-red hover:bg-alpine-green focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Reset Expense
          </button>
        </div>
      </section>
    </>
  );
}
