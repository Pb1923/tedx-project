import React from 'react';
import "./FirstSectionStyle.css";
import Navbar from '../../FinalNav/Finalnav';
import EVOLVE from "../../Assets/EVOLVE.png";


function FirstSection() {
  return (
      <div className="FirstSection">
        <Navbar/>
        <img className="evolve" src={EVOLVE}></img>
        {/* <img className ="banner" src="./images/Paper.png"></img> */}
      </div>
  );
}
export default FirstSection;