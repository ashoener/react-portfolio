import { useState } from "react";
import MenuIcon from "./MenuIcon.jsx";
import LinksContainer from "./LinksContainer.jsx";

export default () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-header-container">
        <h1>Andrew Shoener</h1>
        <MenuIcon action={() => setShowLinks(!showLinks)}></MenuIcon>
      </div>
      <LinksContainer showLinks={showLinks}></LinksContainer>
    </header>
  );
};
