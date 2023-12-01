import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="portfolio-items">
        {props.outlet ? props.outlet : <Outlet />}
      </div>
    </>
  );
}

export default App;
