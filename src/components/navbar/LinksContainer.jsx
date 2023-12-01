export default ({ showLinks }) => {
  return (
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
  );
};
