import Home from "../components/Home";
import About from "../components/About";
import Activity from "../components/Activity";

function RootPage() {
  return (
    <>
      <Home />
      <hr style={{ border: "1px solid  #fd600c" }} />
      <About />
      <Activity />
    </>
  );
}

export default RootPage;
