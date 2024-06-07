import React, { useState } from 'react';
import axios from 'axios'
import qs from 'qs';
import { useNavigate } from 'react-router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const toRegister = () => {
    navigate('/register')
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login',
        qs.stringify({
          username: username,
          password: password,
        }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const token = response.data.split('Use este token para 2FA: ')[1];
      navigate('/verify-2fa', { state: { token } });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}

      <button onClick={toRegister}>REGISTER</button>
    </div>
  );
}

export default Login;
