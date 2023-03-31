import React, { useState } from 'react';
import './Story.css';

function Story () {
    // const [isVerified, setIsVerified] = useState(false);
  
    // const checkPw = () => {
    //   // gets the current input value
    //   const answer = document.getElementById("password").value;
    
    //   if (answer === "yourSecretPassword") { 
    //     setIsVerified(true);
    //   } else {
    //     alert("Sorry, that's not it");
    //   }
    // };
  
   return (
    <div className="Story">
        Story
        {/* <header className="Login-header">
                <img src={clogo} className="Login-clogo" alt="clogo" />
                <form onSubmit={checkPw} className="Login-form">
                    <input className="Login-input" placeholder="password" id="password" name="password"/>
                    <button className="Login-button">Login</button>
                </form>
        </header> */}
    </div>
   );
}

export default Story;