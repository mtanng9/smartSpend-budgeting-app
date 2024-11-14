import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AddAnExpense from "./pages/AddAnExpense";
import LogIn from "./pages/LogIn";
import SetBudget from "./pages/SetBudget";
import SignUp from "./pages/SignUp";
import Root from "./pages/Root";
import InitialHomePage from "./pages/InitialHomePage";
import UserHomePage from "./UserHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <InitialHomePage /> },
      { path: "add-expense", element: <AddAnExpense /> },
      { path: "set-budget", element: <SetBudget /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "log-in", element: <LogIn /> },
      { path: "user-home-page", element: <UserHomePage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
