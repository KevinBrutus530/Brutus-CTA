import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import FeedPage from './components/FeedPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/feed">
          <FeedPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
