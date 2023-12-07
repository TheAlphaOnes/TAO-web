import { Analytics } from "@vercel/analytics/react";
import { Outlet, useNavigate } from "react-router-dom";
import { DataContext } from "../contextProvider/DataContext";

import Navbar from "../components/commons/navbar/Navbar";
import Footer from "../components/commons/Footer";
import { useEffect } from "react";

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
      <DataContext>
        <Outlet />
      </DataContext>
      <Footer />
      <Analytics />
    </>
  );
}

export default AppShell;
