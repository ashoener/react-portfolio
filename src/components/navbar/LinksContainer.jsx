import { Link } from "react-router-dom";

export default ({ showLinks }) => {
  return (
    <nav className={"navbar-links-container" + (showLinks ? "active" : "")}>
      <ul className="navbar-links">
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};
