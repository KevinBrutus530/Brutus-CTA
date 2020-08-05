import React, {useState, useEffect} from 'react';
import { apiURL } from '../util/apiURL'
import axios from 'axios';
import { logout } from '../util/firebaseFunctions';

const FeedPage = () => {
    const [tweets, setTweets] = useState([]);
    const API = apiURL();

    const fetchData = async () => {
        try{
            let res = await axios.get(`http://localhost:3001/tweets`)
            let data = res.data.body
            setTweets(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const loadTweets = tweets.map((tweet, i) => {
        return <li key={i} style={{'listStyle': 'none'}}>{tweet.tweet}</li>
    })  

    return <div>
    <button onClick={logout}>Log Out</button>
    <h1>Feed</h1>
    <ul>
    { loadTweets }
    </ul>
    </div>
}

export default FeedPage;