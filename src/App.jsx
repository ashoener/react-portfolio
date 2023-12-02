import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer.jsx";

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
      <Footer />
    </>
  );
}

App.propTypes = {
  outlet: PropTypes.element.isRequired,
};

export default App;
