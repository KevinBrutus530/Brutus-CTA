import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <SignUp />
            <LogIn />
        </div>
    )
}

export default LandingPage;