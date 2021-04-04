import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase";
import { getFirebaseIdToken } from "../util/firebaseFunctions";
import axios from "axios";
import { apiURL } from "../util/apiURL";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  let API = apiURL();

  let fetchUser = async (userID) => {
    try {
      let res = await axios.get(`${API}/users/${userID}`);
      return res.data.body.singleUser;
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (user) => {
    if (user) {
      const { email, uid } = user;
      const lastLogin = user.metadata.lastLogin;
      const backendUser = await fetchUser(uid);
      setCurrentUser(backendUser);
      getFirebaseIdToken().then((token) => {
        setToken(token);
        setLoading(false);
      });
    } else {
      setCurrentUser(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(updateUser);
    return unsubscribe;
  }, []);

  if (loading) return <div> Loading... </div>;
  return (
    <AuthContext.Provider value={{ currentUser, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
