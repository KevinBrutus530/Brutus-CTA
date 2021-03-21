import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { apiURL } from '../util/apiURL';
import { signUp } from '../util/firebaseFunctions';

export default function SignUp() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ username, setUsername ] =  useState("")
    const [ error, setError ] = useState(null);
    const history = useHistory();
    const API = apiURL();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await signUp(email, password);
            await axios.post(`${API}/users`, {id: res.user.uid, email, username})
            history.push("/feed")
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <h3>Sign Up Will Live Here</h3>
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
                <input 
                type="text" 
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                />
                <button type="submit">Create Account</button>
            </form>
        </div>
    )
}