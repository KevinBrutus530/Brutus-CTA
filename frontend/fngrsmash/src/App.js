import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import FeedPage from './components/FeedPage';
import UserProfile from './components/UserProfile';
import LandingPage from './components/LandingPage';
import AuthProvider from './providers/AuthContext';
import { AuthRoute, ProtectedRoute } from './util/routesUtil';
function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Switch>
        <AuthRoute exact path="/">
          <LandingPage />
        </AuthRoute>
        <ProtectedRoute path="/feed">
          <FeedPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <UserProfile />
        </ProtectedRoute>
      </Switch>
    </AuthProvider>
    </div>
  );
}

export default App;
