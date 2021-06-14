import React from "react";
import "./App.css";

import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";
import Items from "./components/Popular-Items/Items";

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Items />
    </div>
  );
}

export default App;
