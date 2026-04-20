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
        setTweets(res.data.reverse())
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
            handleGetTweets();
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
        <div className='container-fluid'>
            <div className='container d-flex flex-row'>
                <div className='col-3'>
                    <ul className='d-flex flex-column gap-3'>
                        <li><i className="bi bi-twitter-x text-white fs-3"></i></li>
                        <li><i className="bi bi-house-door text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Home</span></li>
                        <li><i className="bi bi-search text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Explore</span></li>
                        <li><i className="bi bi-bell text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Notifications</span></li>
                        <li><i className="bi bi-person-plus text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Follow</span></li>
                        <li><i className="bi bi-chat text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Chat</span></li>
                        <li><i className="bi bi-robot text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Grok</span></li>
                        <li><i className="bi bi-bookmark text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Bookmark</span></li>
                        <li><i className="bi bi-twitter-x text-white fs-5 me-4"></i><span className='text-white fs-4 fw-light'>Premium</span></li>
                        <li><i className="bi bi-person text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>Profile</span></li>
                        <li><i className="bi bi-three-dots text-white fs-4 me-4"></i><span className='text-white fs-4 fw-light'>More</span></li>
                        <li><button className='btn btn-light fw-bold py-2 w-75 rounded-5'>Post</button></li>
                    </ul>
                </div>
                <div className='col-5'>
                    <div className='my-3 d-flex justify-content-evenly'>
                        <span className='fs-5 fw-bold text-light border-1'>For you</span>
                        <span className='fs-5 fw-bold'>Following</span>
                    </div>
                    <div className='p-4 text-center'>
                        <input type="text" onChange={(e) => setText(e.target.value)} placeholder='Enter your thoughts!!' className='bg-dark border-0 py-2 px-3 rounded-5 w-75 text-white me-3' />
                        <button onClick={handlePostTweet} className='btn btn-info rounded-4 px-4'>Post</button>
                        <div className='d-flex gap-4 ms-5 mt-2'>
                            <span><i className="bi bi-image text-info"></i></span>
                            <span><i className="bi bi-filetype-gif text-info"></i></span>
                            <span><i className="bi bi-robot text-info"></i></span>
                            <span><i className="bi bi-emoji-smile text-info"></i></span>
                            <span><i className="bi bi-calendar4 text-info"></i></span>
                            <span><i className="bi bi-geo-alt text-info"></i></span>
                            <span><i className="bi bi-flag text-info"></i></span>
                        </div>
                    </div>
                    <div className=''>
                        {
                            tweets.map((tweet) =>
                                <div key={tweet.id} className='card bg-black border-secondary text-white p-3 mb-3'>
                                    <span className='fw-bold fs-5 mb-3'><i className="bi bi-person-circle me-3 fs-4"></i>{tweet.user}</span>
                                    <p>{tweet.text}</p>
                                    <p className='text-end fw-lighter text-secondary'>{tweet.createdAt}</p>
                                    <div className='d-flex gap-4'>
                                        <i className="bi bi-suit-heart fs-5"></i>
                                        <i className="bi bi-chat fs-5"></i>
                                        <i className="bi bi-send fs-5"></i>
                                        <i className="bi bi-box-arrow-down fs-5"></i>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                <div className='col-4 ms-5 mt-3'>
                    <div>
                        <input type="text" placeholder='Search' className='bg-dark border-0 rounded-5 px-3 py-2 w-75' />
                    </div>
                    <div className='card mt-3 w-75 bg-black border-secondary rounded-4 text-white py-3 px-3'>
                        <h5>Subscribe to Premium <span className=' text-light fs-6 p-1 rounded-3 bg-success bg-opacity-75 py-0 px-1'>50% off</span></h5>
                        <p>Get rid of ads, see your analytics, boost your replies and unlock 20+ features.</p>
                        <div>
                            <button className='btn btn-primary rounded-4 text-white fw-bold '>Subscribe</button>
                        </div>
                    </div>
                    <div className='card mt-3 w-75 bg-black border-secondary rounded-4 text-white py-3 px-3'>
                        <h5>Today's News</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p className='fw-lighter text-secondary'>4 Days ago•News•220K posts</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p className='fw-lighter text-secondary'>2 Days ago•News•190K posts</p>

                </div>
            </div>
        </div>
        </div >
    )
}
