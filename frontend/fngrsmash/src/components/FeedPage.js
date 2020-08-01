import React, {useState, useEffect} from 'react';
import { apiURL } from '../util/apiURL'
import axios from 'axios';

const FeedPage = () => {
    const [tweets, setTweets] = useState([]);
    const API = apiURL();

    const fetchData = async () => {
        try{
            let res = await axios.get(`${API}/tweets`)
            let data = res.data.body
            setTweets(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    const loadTweets = tweets.map(tweet => {
        return <div>{tweet.tweet}</div>
    })  

    return <div>
    <h1>Feed</h1>
    { loadTweets }
    </div>
}

export default FeedPage;