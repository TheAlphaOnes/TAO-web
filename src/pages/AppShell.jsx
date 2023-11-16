import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/commons/navbar/Navbar";
import Footer from "../components/commons/footer/Footer";

function AppShell() {
  const navigate = useNavigate();
  useEffect(
    function () {
      if (window.location.pathname === "/") navigate("/home");
    },
    [navigate]
  );
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
}

export default AppShell;
