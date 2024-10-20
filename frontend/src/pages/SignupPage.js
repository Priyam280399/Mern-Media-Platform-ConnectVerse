// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignupPage = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
//             console.log(res,"-->");
//             localStorage.setItem('token', res.data.token);
//         if(res.status=201){
//              navigate('/login');
//         }
//             // Redirect to login page
//         } catch (err) {
//             setError('Error signing up');
//         }
       
//     };

//     return (
//         <div className="signup-page">
//             <form onSubmit={handleSignup}>
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 {error && <p>{error}</p>}
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default SignupPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
            console.log(res, "-->");
            if (res.status === 201) {
                navigate('/login');
            }
            // Redirect to login or homepage after successful signup
        } catch (err) {
            setError('Error signing up');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {/* Heading moved to the top with bold text */}
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1D4ED8', marginBottom: '2rem', position: 'absolute', top: '10%' }}>
                Connectverse
            </h1>

            <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    required 
                    style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                    style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                    style={{ padding: '0.5rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" style={{ backgroundColor: '#2563EB', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.375rem' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignupPage;
