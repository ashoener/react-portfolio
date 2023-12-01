import MenuIcon from "./MenuIcon.jsx";

export default () => {
  return (
    <header class="navbar">
      <div class="navbar-header-container">
        <h1>Andrew Shoener</h1>
        <MenuIcon></MenuIcon>
      </div>
      <nav class="navbar-links-container">
        <ul class="navbar-links">
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
