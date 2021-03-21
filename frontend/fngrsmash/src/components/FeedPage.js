import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../providers/AuthContext';
import { apiURL } from "../util/apiURL";
import { logout } from "../util/firebaseFunctions";
import axios from "axios";

const FeedPage = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");
  const [ error, setError ] = useState(null);
  const { token, currentUser, loading } = useContext(AuthContext);
  const API = apiURL();

  const fetchData = async () => {
    try {
      let res = await axios.get(`${API}/tweets`);
      let data = res.data.body;
      setTweets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTweet = (e) =>{
    setNewTweet(e.target.value)
  }

  const handleTweetSubmit= async (e) => {
    e.preventDefault();
    const tweet = {
      "user_tweet_id" : currentUser.id,
      "tweet" : newTweet
    }
      try{
        await axios.post(`${API}/tweets/`, tweet)
        fetchData();
      } catch {
        setError("Please use less than 280 characters")
      }
  }

  const loadTweets = tweets.map((tweet, i) => {
    return (
      <li key={i} style={{ listStyle: "none" }}>
        {tweet.tweet}
      </li>
    );
  });

  return (
    <div>
      <button onClick={logout}>Log Out</button>
      <div>
      <form onSubmit={handleTweetSubmit}>
            <input placeholder="Something on your mind?" onChange={handleTweet}></input>
            <button  id="submit" type="submit">Tweet</button>
      </form>
      </div>
      <h3>Tweets</h3>
      <ul>{loadTweets}</ul>
    </div>
  );
};

export default FeedPage;
