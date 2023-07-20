
import {
  Route,
  
  Routes
} from "react-router-dom";

import IndexPage from "./pages/IndexPage"
import ContactPage from "./pages/ContactPage"
import TeamPage from "./pages/TeamPage"
import ProjectPage from "./pages/ProjectPage"
import LaunchesPage from "./pages/LaunchesPage"

import './App.css';


function App() {
  return (
    <>
    {/* <BrowserRouter> */}
    <Routes>
      <Route path="/" element={ <IndexPage/> } />
      <Route path="/launches" element={ <LaunchesPage/> } />
      <Route path="/team" element={<TeamPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/project" element={<ProjectPage/>} />
    </Routes>
    

    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
