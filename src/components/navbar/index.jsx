import { useState } from "react";
import MenuIcon from "./MenuIcon.jsx";
import LinksContainer from "./LinksContainer.jsx";
import { Link } from "react-router-dom";

export default () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-header-container">
        <Link to="/">
          <h1>Andrew Shoener</h1>
        </Link>
        <MenuIcon action={() => setShowLinks(!showLinks)} />
      </div>
      <LinksContainer showLinks={showLinks}></LinksContainer>
    </header>
  );
};
