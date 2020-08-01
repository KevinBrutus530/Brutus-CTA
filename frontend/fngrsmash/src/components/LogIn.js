import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function LogIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState(null);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            history.push("/feed")
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <h3>Log In Will Live Here</h3>
            {error ? <div>{error}</div> : null}
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                autoComplete="on"
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}