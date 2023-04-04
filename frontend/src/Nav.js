// import React, { useState } from 'react';
import './Nav.css';
import clogo from './clogo.svg';

function Nav ({generateStory, isVerified, setIsVerified}) {
    // const [isVerified, setIsVerified] = useState(false);
  
    const genStory = (e) => {
      // gets the current input value
      e.preventDefault();

      if (isVerified === false) {
        const level = document.getElementById("level").value;

        const topic = document.getElementById("topic").value;

        const data = {level: level, topic: topic};

        generateStory(data);

        setIsVerified(true);
      }

      
    
    //   if (level & topic !== null) {
    //     generateStory(data)
    //     console.log(data)
    //   } else {
    //     console.log("Sorry, that's not it");
    //   }
    };
  
   return (
        <div className="Nav">
            <img src={clogo} className="Nav-clogo" alt="clogo" />                
            <form onSubmit={genStory} className="Nav-form">
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