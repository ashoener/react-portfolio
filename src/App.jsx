import { useState } from "react";

import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

export default App;
