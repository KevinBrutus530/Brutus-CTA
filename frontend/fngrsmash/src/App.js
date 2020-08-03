import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import FeedPage from './components/FeedPage';
import UserProfile from './components/UserProfile';
import LandingPage from './components/LandingPage';
import AuthProvider from './providers/AuthContext';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/feed">
          <FeedPage />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
    </AuthProvider>
    </div>
  );
}

export default App;
