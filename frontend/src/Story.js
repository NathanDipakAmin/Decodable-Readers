import React, { useEffect, useState } from 'react';
import './Story.css';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-GhDfDedBY2tVsrfpCOUUxeVI",
    apiKey: "sk-"+process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function Story ({data, isVerified, setIsVerified}) {
    const [story, setStory] = useState('');

    useEffect(() => {
        async function requestChatGPT() {
            if (isVerified === true){
                const response = await openai.createCompletion({
                    model: "text-davinci-003",
                    prompt: "Tell me a 10 sentence phonics level " + data.level +" story suitable for children about a " + data.topic,
                    temperature: 0,
                    max_tokens: 500,
                    top_p: 1.0,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                });
                setStory(response.data.choices[0].text);
                setIsVerified(false);
            };
        }
        requestChatGPT();
    },[isVerified]);
  
   return (
    <div className="Story">
        {data.level && data.topic != null ?
            <div className="Story-generated">
                <p>{story}</p>
            </div>
         :
        <div className="Story-placeholder">
            Input a Reading Level and a Topic
            {/* <p>
                Once upon a time, there were three kittens named Mimi, Coco, and Toto. They lived in a cozy cottage with their owner, Mrs. Smith.
            </p>
            <p>
                One sunny day, they decided to go on an adventure to the meadow. They walked through the tall grass, and suddenly, they heard a loud growl. It was a big, brown bear!
            </p>
            <p>
                The kittens were scared, but Mimi had an idea. She remembered that her owner had taught her how to make loud noises to scare away wild animals. So, the kittens worked together to make the loudest meow they could.
            </p>
            <p>
                To their surprise, the bear ran away! The kittens were relieved and continued their adventure. They found a beautiful flower field and chased butterflies.
            </p>
            <p>
                On their way back home, they met a wise old owl. The owl told them that their teamwork and bravery was impressive. The kittens were happy to hear that and felt proud of themselves.
            </p>
            <p>
                From that day on, the kittens knew that they could overcome any obstacle as long as they worked together. They lived happily ever after in their cozy cottage with their beloved owner, Mrs. Smith. 
            </p>
            <p>
                The end.
            </p> */}
        </div>
        }
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