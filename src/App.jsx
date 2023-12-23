import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppShell from "./pages/AppShell";
import Home from "./pages/Home";
import Launches from "./pages/Launches";
import Members from "./pages/Members";
import Contact from "./components/navigation/contact/Contact";
import Error from "./components/commons/Error";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route path="*" element={<Error />} />
            <Route index element={<Home />} />
            <Route path="launches" element={<Launches />} />
            <Route path="members" element={<Members />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
