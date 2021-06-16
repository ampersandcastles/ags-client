import React, {useState, useEffect} from 'react';
import Products from './components/Products/Products';
import Auth from './components/Auth/Auth';
// import Sitebar from './components/Navbar/Navbar';

function App(){

  return (
    <div>
      <h1>Pit of dispair</h1>
      <Products />
      {/* <Auth /> */}
    </div>
  )
}

export default App;
