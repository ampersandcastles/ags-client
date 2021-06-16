import React from "react";
import { Button } from "@material-ui/core";
import "./App.css";
import hopLogo from "./assets/hop-no-text.png";
import MenuIcon from "@material-ui/icons/Menu";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div id="mainDiv">
      <div className="nav">
        <Button color="primary">
          <MenuIcon id="menu" />
        </Button>
        <a href="/">
          <img id="hopLogo" src={hopLogo} alt="House of Pain" />
        </a>
      </div>
      <div>
        <Navbar />
      </div>
      <div className="body">
        <p>Trial and error.</p>
      </div>
    </div>
  );
}

export default App;
