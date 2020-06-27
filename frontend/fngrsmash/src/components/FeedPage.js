import React, {useState, useEffect} from 'react';
import axios from 'axios';

const FeedPage = () => {
    const [tweets, setTweets] = useState([]);

    const fetchData = async () => {
        try{
            let res = await axios.get("http://localhost:3000/tweets")
            let data = res.data.body
            setTweets(data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        // debugger
    }, [])

    
    const loadTweets = tweets.map(tweet => {
        return <div>{tweet.tweet}</div>
    })  

    return <div>{ loadTweets }</div>
}

export default FeedPage;