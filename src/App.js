import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Info from "./Components/Info/Info";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './Components/NavbarComp/Navbarcomp';
import First from './Components/First/First';
import What from './Components/Whatis/What';
import Navbar from './FinalNav/Finalnav';
import FirstSection from './Components/Firstsection/Firstsection';
import EVENTS from './Components/EVENTSS/EVENTS.jsx';

import Carousel from './Components/Carousel/Carousel';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Navbarcomp/> */}
      {/* <Navbar/> */}
      <FirstSection />
      <What />
      {/*import the component that you created  */}

      <About />
      {/* <Event/> */}
      <EVENTS />
      {/* <Carousel /> */}
      <Header />
      <Info />


      Learn React

    </div>
  );
}

export default App;
