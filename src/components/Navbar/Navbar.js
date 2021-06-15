import React from "react";
import hopLogo from "../../assets/hop-no-text.png";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Navbar.css";

import { Button } from "@material-ui/core";

const Navbar = (props) => {
  return (
    <div id="mainDiv">
      <div className="nav">
        <Button color="primary">
          <MenuIcon id="menu" />
        </Button>
        <a href="/">
          <img id="hopLogo" src={hopLogo} alt="House of Pain" />
        </a>
        <Button color="primary">
          <ShoppingCartIcon id="shopping" />
        </Button>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default Navbar;
