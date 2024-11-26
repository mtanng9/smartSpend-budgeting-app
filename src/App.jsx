import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AddAnExpense from "./pages/AddAnExpense";
import LogIn, { LoginAction } from "./pages/LogIn";
import SetBudget from "./pages/SetBudget";
import SignUp, { SignUpAction } from "./pages/SignUp";
import Root from "./pages/Root";
import InitialHomePage from "./pages/InitialHomePage";
import UserHomePage from "./pages/UserHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <InitialHomePage /> },
      {
        path: "auth",
        children: [
          { path: "sign-up", element: <SignUp />, action: SignUpAction },
          { path: "log-in", element: <LogIn />, action: LoginAction },
        ],
      },
      { path: "add-expense", element: <AddAnExpense /> },
      { path: "set-budget", element: <SetBudget /> },
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
