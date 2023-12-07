import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import { DataContext } from "../contextProvider/DataContext";

import Navbar from "../components/commons/navbar/Navbar";
import Footer from "../components/commons/Footer";

function AppShell() {

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
