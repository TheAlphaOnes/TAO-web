import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import About from "../components/About";
// import Home from "../components/Home";
// import Activity from "../components/Activity";
import { Outlet, useNavigate } from "react-router-dom";

export default function IndexPage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") navigate("/about");
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Helmet>
        <script src="typer.js" type="text/javascript" />
      </Helmet>
    </div>
  );
}
