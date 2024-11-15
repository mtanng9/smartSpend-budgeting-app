export default function ResetExpense() {
  return (
    <>
      <section>
        <h2 className="text-2xl text-dark-green font-bold">
          Reset your expense
        </h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="amount-input" className=" text-sm text-dark-green">
            Reset your expense back to 0
          </label>

          <button
            type="button"
            className=" self-start text-bright-white bg-light-red hover:bg-dark-red focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            Reset Expense
          </button>
        </div>
      </section>
    </>
  );
}
