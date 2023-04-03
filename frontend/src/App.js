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
        <Nav />
        <Story />
    </div>
  );
}

export default App;