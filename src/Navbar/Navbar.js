import React from "react";
import "./Navbar.scss";
import logo from "../logo.PNG";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo of Explore World" className="navimg" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>

        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>

        <li>
          <a href="/" className="nav-link active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
