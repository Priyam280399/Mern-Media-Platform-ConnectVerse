import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginPage = () => {
    const [username, setUsername] = useState(''); // Changed to username
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            console.log(res, "-->");
    
            // Save the token in localStorage
            localStorage.setItem('token', res.data.token);
    
            // Handle "Remember Me" functionality
            if (rememberMe) {
                // Set cookie with the username that expires in 30 days
                Cookies.set('username', username, { expires: 30 });
            } else {
                // Remove cookie if "Remember Me" is not checked
                Cookies.remove('username');
            }
          
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-page">
            <form onSubmit={handleLogin}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} // Set username
                    placeholder="Username" // Changed placeholder to Username
                />
                <div className="password-field">
                    <input 
                        type={showPassword ? 'text' : 'password'} // Toggle password visibility
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)} // Toggle visibility
                    >
                        {showPassword ? 'Hide' : 'Show'} {/* Button text changes based on state */}
                    </button>
                </div>
                {error && <p>{error}</p>}
                <div>
                    <input 
                        type="checkbox" 
                        id="rememberMe" 
                        checked={rememberMe} 
                        onChange={() => setRememberMe(!rememberMe)} 
                    />
                    <label htmlFor="rememberMe">Remember Me</label>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
