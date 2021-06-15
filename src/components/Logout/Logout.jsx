import React from 'react';
import './logout.css';
import logoutPic from '../assets/logoutPic.png';

const Logout = (props) => {
    return(
        <div>
            <img id="logout" 
                src={logoutPic} 
                alt="Power Button" 
                onClick={props.clearSession} />
        </div>
    )
}
export default Logout;