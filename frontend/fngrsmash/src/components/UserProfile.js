import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthContext";
import { apiURL } from "../util/apiURL";
import { logout } from "../util/firebaseFunctions";
import axios from "axios";

const UserProfile = () => {
  const [userTweets, setUserTweets] = useState([]);
  let history = useHistory();
  const { currentUser } = useContext(AuthContext);
  const API = apiURL();

  const fetchData = async () => {
    try {
      let res = await axios.get(`${API}/tweets/${"BrutusTheFirst"}`);
      let data = res.data.body;
      setUserTweets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadUserTweets = userTweets.map((tweet, i) => {
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
      <button onClick={() => history.push(`/feed`)}>Home</button>
      <div>{loadUserTweets}</div>
    </div>
  );
};

export default UserProfile;
