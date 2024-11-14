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
      <LogIn />
      <SignUp />
      <SetBudget />
      <AddAnExpense />
    </>
  );
}

export default App;
