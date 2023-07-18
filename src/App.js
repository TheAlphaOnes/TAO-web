import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import {Helmet} from "react-helmet";

function App() {
  return (
    <>
    < Navbar />
    <Home/>
    <Helmet>
    <script src="typer.js" type="text/javascript" />
    </Helmet>

    </>
  );
}

export default App;
