import React from 'react';

const LogIn = () => {
    return (
        <div>
            <h3>User can login here</h3>
            <form>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn;