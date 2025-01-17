import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Nav from './Nav';
import Story from './Story';

function App() {
  const [getMessage, setGetMessage] = useState({});

  const [isVerified, setIsVerified] = useState(false);

  const [data, setData] = useState({level:'',topic:''});

  const generateStory = (story) => {
    setData(story)
  };

  // useEffect(()=>{
  //   axios.get('http://decodable-stories.herokuapp.com/flask/hello').then(response => {
  //     console.log("SUCCESS", response)
  //     setGetMessage(response)
  //   }).catch(error => {
  //     console.log("ERROR", error)
  //   })

  // }, [])
  return (
    <div className="App">
        <Nav generateStory={generateStory} isVerified={isVerified} setIsVerified={setIsVerified}/>
        <Story data={data} isVerified={isVerified} setIsVerified={setIsVerified}/>
    </div>
  );
}

export default App;