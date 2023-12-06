import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { DataContext } from "../contextProvider/DataContext";

import Navbar from "../components/commons/navbar/Navbar";
import Footer from "../components/commons/Footer";
import InitialLoader from "../components/commons/InitialLoader";

function AppShell() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  function handleLoad() {
    setIsLoading(false);
  }

  useEffect(
    function () {
      window.addEventListener("load", handleLoad);
      if (window.location.pathname === "/") navigate("/home");
    },
    [navigate]
  );

  return (
    <>
      {isLoading && <InitialLoader />}
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
