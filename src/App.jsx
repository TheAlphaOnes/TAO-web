import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./pages/AppShell";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
// import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route path="home" element={<Home />} />
            <Route path="launches" element={<Launches />} />
            <Route path="members" element={"Members"} />
            <Route path="contact" element={"Contactus"} />
            {/* <Route path="portfolio" element={<Portfolio/>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
