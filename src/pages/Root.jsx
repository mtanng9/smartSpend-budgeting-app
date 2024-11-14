import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      <Header />
      {/* similar to children in react components but for react router dom  */}
      <Outlet />
    </>
  );
}
