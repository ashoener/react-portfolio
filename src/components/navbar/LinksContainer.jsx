import { NavLink } from "react-router-dom";

export default ({ showLinks }) => {
  return (
    <nav className={"navbar-links-container" + (showLinks ? "active" : "")}>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
};
