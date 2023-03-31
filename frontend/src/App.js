import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Nav from './Nav';
import Story from './Story';

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(()=>{
    axios.get('http://decodable-stories.herokuapp.com/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log("ERROR", error)
    })

  }, [])
  return (
    <div className="App">
      <div className="App-nav">
        <Nav />
        {/* <div>{getMessage.status === 200 ? 
          <h3>{getMessage.data.message}</h3>
          :
          <h3>Login</h3>}
      </div> */}
      </div>
      <div className="App-story">
        <Story />
      </div>
    </div>
  );
}

export default App;