import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Info from "./Components/Info/Info";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomp from './Components/NavbarComp/Navbarcomp';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbarcomp/>
        <Header/>
        <Info/>
        <About/>

          Learn React
       
    </div>
  );
}

export default App;
