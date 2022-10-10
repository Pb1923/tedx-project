import React from "react";
import "./final.css";
import logo from "../../src/Assets/image 18.png"
function Navbar() {
  return (
    <>
      <nav>
        <a href="index.html">
          <img className="navbarimage" src={logo}></img>
        </a>
        <div>
          <ul id="navbarcontent">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">About</a>
            </li>
            <li>
              <a href="index.html">Speaker</a>
            </li>
            <li>
              <a href="index.html">Team</a>
            </li>
            <li>
              <a href="index.html">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;