import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';
import { apiURL } from "../util/apiURL";
import { logout } from "../util/firebaseFunctions";
import axios from "axios";

const UserProfile = () => {
    const [ userTweets, setUserTweets ] = useState([]);
    let history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const API = apiURL();


    const fetchData = async () => {
        try {
          let res = await axios.get(`${API}/tweets/${currentUser.username}`);
          debugger
          let data = res.data.body;
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        fetchData();
      }, []);

    return (
        <div>
            <h1>User Profile</h1>
            <button onClick={() => history.push(`/feed`)}>Home</button>
        </div>
    )
}

export default UserProfile;