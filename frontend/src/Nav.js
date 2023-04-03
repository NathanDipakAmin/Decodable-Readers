import React, { useState } from 'react';
import './Nav.css';
import clogo from './clogo.svg';

function Nav () {
    const [isVerified, setIsVerified] = useState(false);
  
    const checkPw = () => {
      // gets the current input value
      const level = document.getElementById("level").value;

      const topic = document.getElementById("topic").value;
    
      if (level & topic !== null) { 
        setIsVerified(true);
      } else {
        alert("Sorry, that's not it");
      }
    };
  
   return (
    <div className="Nav">
        <img src={clogo} className="Nav-clogo" alt="clogo" />                
        <form onSubmit={checkPw} className="Nav-form">
            <div className="Nav-level">
                <p className="Nav-level-title">
                    Phonics Reading Level
                </p>
                <input className="Nav-level-input" placeholder="35" id="level" name="level"/>
            </div>
            <div className="Nav-topic">
                <p className="Nav-topic-title">
                    Topic
                </p>
                <input className="Nav-topic-input" placeholder="Magical Cats" id="topic" name="topic"/>
            </div>
            <button className="Nav-button">Generate</button>
        </form>
    </div>
   );
}

export default Nav;