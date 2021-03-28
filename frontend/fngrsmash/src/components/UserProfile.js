import React from 'react';
import { useHistory } from 'react-router-dom';


const UserProfile = () => {
    let history = useHistory();

    return (
        <div>
            <h1>User Profile</h1>
            <button onClick={() => history.push(`/feed`)}>Home</button>
        </div>
    )
}

export default UserProfile;