import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";

function App(props) {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <h2>Portfolio</h2>
        </section>
        {props.outlet ? props.outlet : <Outlet />}
      </main>
    </>
  );
}

export default App;
