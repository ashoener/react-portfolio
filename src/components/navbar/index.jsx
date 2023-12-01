import { useState } from "react";
import MenuIcon from "./MenuIcon.jsx";

export default () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-header-container">
        <h1>Andrew Shoener</h1>
        <MenuIcon></MenuIcon>
      </div>
      <nav className={"navbar-links-container" + (showLinks ? "active" : "")}>
        <ul className="navbar-links">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
