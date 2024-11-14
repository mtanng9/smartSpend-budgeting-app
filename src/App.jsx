import "./App.css";
import AddAnExpense from "./components/AddAnExpense";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SetBudget from "./components/SetBudget";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <div className="flex h-screen ">
        <div className="flex-col m-auto">
          <h1 className="text-9xl text-bold">SMART SPEND</h1>
          <h2 className="text-4xl text-center mb-10">
            Track your income and expenses effortlessly
          </h2>
          <div className="justify-center">
            <a
              href="#"
              className="text-2xl outline-1 outline-alpine-green outline p-10 m-5 rounded-lg bg-money-green"
            >
              Let's Budget
            </a>
          </div>
        </div>
      </div>
      {/* <LogIn />
      <SignUp />
      <SetBudget />
      <AddAnExpense /> */}
    </>
  );
}

export default App;
