import React, { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { logout } from "../util/firebaseFunctions";
import TweetForm from "./TweetForm";

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

  const loadTweets = tweets.map((tweet, i) => {
    return (
      <li key={i} style={{ listStyle: "none" }}>
        {tweet.tweet}
      </li>
    );
  });

  // const loadTweetUser = tweetUser.map((user, i) => {
  //     return <h4> {user.user}</h4>
  // })

  return (
    <div>
      <button onClick={logout}>Log Out</button>
      <TweetForm newTweet={newTweet} />
      <h3>User Tweets</h3>
      <ul>{loadTweets}</ul>
    </div>
  );
};

export default FeedPage;
