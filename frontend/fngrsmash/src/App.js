import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import FeedPage from './components/FeedPage';
import UserProfile from './components/UserProfile';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
