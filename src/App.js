import React, {useState, useEffect} from 'react';
import Products from './components/Products/Products';
import Auth from './components/Auth/Auth';
import Navigation from './components/Navbar/Navbar';
import bakery from "./assets/bakery.jpg";
import { BrowserRouter as Router } from "react-router-dom";

function App(){

  return (
    <div 
    className="App" 
    style={{ 
    backgroundImage: `url(${bakery})`,
    backgroundSize: "cover",
    height: "100vh" 
    }}>
      <div className="App-content">
      <Router>
        <Navigation />
      {/* <h1>Pit of dispair</h1> */}
      {/* <Products /> */}
      </Router>
        <div className="Login">
        <Auth />
        </div>
      </div>
    </div>
  )
}

export default App;
