import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../components/commons/navbar/Navbar";
import Footer from "../components/commons/footer/Footer";
import { DataContext } from "../contextProvider/DataContext";

import InitialLoader from "../components/commons/InitialLoader";

function AppShell() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    function () {
      window.addEventListener("load", function () {
        setIsLoading(false);
      });

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
    </>
  );
}

export default AppShell;
