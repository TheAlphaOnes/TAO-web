import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <hr style={{border: '1px solid  #fd600c'}} />
    <About/>
    <Helmet>
    <script src="typer.js" type="text/javascript" />
    </Helmet>

    </>
  );
}

export default App;
