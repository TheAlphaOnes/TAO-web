import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";

function AppShell() {
  const navigate = useNavigate();
  useEffect(
    function () {
      if (window.location.pathname === "/") navigate("/about");
    },
    [navigate]
  );
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppShell;
