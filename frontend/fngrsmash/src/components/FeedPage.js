import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from '../providers/AuthContext';
import { apiURL } from "../util/apiURL";
import { logout } from "../util/firebaseFunctions";
import axios from "axios";

const FeedPage = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");
  const [error, setError] = useState(null);

  const { currentUser } = useContext(AuthContext);

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


  // limit tweet to 280char 
  const handleTweet = (e) =>{
    if(e.target.value.length <= 280){
      setNewTweet(e.target.value)
      } else {
      window.alert("tweet too long")
    }
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
        setError(error)
      }
  }

  const loadTweets = tweets.map((tweet, i) => {
    return (
      <li key={i} style={{ listStyle: "none" }}>
        <h4>{tweet.username}</h4>
        <p>{tweet.tweet}</p>
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
            <p>{newTweet.length > 260 ? newTweet.length : null}</p>
      </form>

      </div>
      <h3>Tweets</h3>
      <ul>{loadTweets}</ul>
    </div>
  );
};

export default FeedPage;
