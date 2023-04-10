import React, { useEffect, useState } from 'react';
import './Story.css';
import axios from 'axios';

function Story ({data, isVerified, setIsVerified}) {
    const [story, setStory] = useState('');
    const [imageURL,setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function requestChatGPT() {
            if (isVerified === true){
                setIsLoading(true);

                const jsonData = { level: data.level, topic: data.topic };

                axios.post('https://decodable-stories.herokuapp.com/chat_api/', jsonData, { withCredentials: true }).then(response => {
                    console.log("SUCCESS", response.data[0])
                    setIsLoading(false);
                    setStory(response.data[0]);
                    setImageURL(response.data[1]);
                    }).catch(error => {
                    console.log(error);
                    setIsLoading(false)
                });
                
                setIsVerified(false);
            };
        }
        requestChatGPT();
    },[isVerified]);
  
   return (
    <div className="Story">
        {isLoading ? <div className='Story-loader'/>:
            <>
                {data.level && data.topic != null ?
                    <div className="Story-generated">
                        {imageURL !== '' ?
                        <img 
                        src={imageURL}
                        alt="new"
                        className='Story-image'
                        /> : <></>

                        }
                        <p className='Story-content'>{story}</p>
                    </div>

                :
                <div className="Story-placeholder">
                    Input a Reading Level and a Topic
                </div>
                }
            </>
        }
    </div>
   );
}

export default Story;