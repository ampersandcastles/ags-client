import React, {useState, useEffect} from 'react';
import Products from './components/Products/Products';
import Auth from './components/Auth/Auth';
import Navigation from './components/Navbar/Navbar';
import bakery from "./assets/bakery.jpg";

function App(){

  return (
    <div 
    className="App" 
    style={{ 
    backgroundImage: `url(${bakery})`,
    backgroundSize: "cover",
    height: "100vh" 
    }}>
      <div classNAme="App-content">
      <Navigation />
      {/* <h1>Pit of dispair</h1> */}
      {/* <Products /> */}
      {/* <Auth /> */}
      </div>
    </div>
  )
}

export default App;
