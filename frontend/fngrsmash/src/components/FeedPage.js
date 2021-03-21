import React, { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { logout } from "../util/firebaseFunctions";

const FeedPage = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState([]);
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

  const handleClick = async (e) => {
    debugger
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
      <form onSubmit={handleClick}>
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
