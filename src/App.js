import React, {useState, useEffect} from 'react';
import Products from './components/Products/Products';
import Auth from './components/Auth/Auth';
import Navigation from './components/Navbar/Navbar';
import bakery from './components/assets/bakery.jpg';

function App(){
  const [sessionToken, setSessionToken] = useState('');
  
  useEffect(() => { //2
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    };
  });

  const updateToken = (newToken) => { //3
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
  
  const clearToken =() => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return sessionToken === localStorage.getItem('token') ? 
    <Products token={sessionToken}/> : 
    <Auth updateToken={updateToken}/>
}



  return (
    <div 
    className="App" 
    style={{ 
    backgroundImage: `url(${bakery})`,
    backgroundSize: "cover",
    height: "100vh" 
    }}>
      <div classNAme="App-content">
      <Navigation clickLogout={clearToken}/>
      <h1>Pit of dispair</h1>
      {/* <Navigation clickLogout={clearToken}/> */}
      {protectedViews()}
      </div>
    </div>
  )
}

export default App;
