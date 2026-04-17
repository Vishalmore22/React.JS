import axios from 'axios'
import React, { useEffect, useState } from 'react'
import tweets from '../components/tweets'
import { tweets_api } from '../utils/api'

export default function Home() {

    const [tweets, setTweets] = useState([])
    const [text, setText] = useState("");

    //function call date from server 
    const handleGetTweets = async () => {
        const res = await axios.get(tweets_api);
        setTweets(res.data)
    }

    const handlePostTweet = async () => {
        const date = new Date();
        const user = JSON.parse(localStorage.getItem("current-user"))
        const data = {
            text: text,
            user: user.email,
            createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        }
        const res = await axios.post(tweets_api, data);
        if (res.status == 201) {
            alert("tweet posted successfully !")
        }
        else {
            alert("cant sent tweet !")
        }
    }

    // call function in useEffect
    useEffect(() => {
        handleGetTweets()
    }, [])

    return (
        <div className='container'>
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)} placeholder='Enter your thoughts!!' />
                <button onClick={handlePostTweet}>post</button>
            </div>
            <div>
                {
                    tweets.map((tweet) => <div key={tweet.id}>
                        <h4>{tweet.user}</h4>
                        <p>{tweet.text}</p>
                        <p>{tweet.createdAt}</p>
                    </div>)
                }
            </div>
        </div>
    )
}
