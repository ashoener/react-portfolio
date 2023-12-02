import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

export default function LinksContainer({ showLinks }) {
  return (
    <nav className={"navbar-links-container" + (showLinks ? "active" : "")}>
      <ul className="navbar-links">
        <li>
          <NavLink to="/">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
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
}

LinksContainer.propTypes = {
  showLinks: PropTypes.bool.isRequired,
};
