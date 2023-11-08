import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppShell from "./pages/AppShell";
import About from "./pages/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route path="about" element={<About />} />
            <Route path="launches" element={"Launches"} />
            <Route path="members" element={"Members"} />
            <Route path="contact" element={"Contactus"} />
            <Route path="portfolio" element={"Portfolio"} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
