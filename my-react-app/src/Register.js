import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [img, SetImg] = useState('');
    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login')
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register',
                qs.stringify({
                    username: username,
                    password: password,
                }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            SetImg(response.data.qrCodeUrl)
            setMessage(response.data.qrCodeUrl || 'Registro exitoso!');
        } catch (error) {
            setMessage(error.response?.data || 'Error al registrar usuario');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
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
                <button type="submit">Register</button>
            </form>
            <button onClick={toLogin}>Ir al login</button>

            {message && <p>{message}</p>}
            {img && <div><p>Escanea este QR Code con tu aplicación de autenticación:</p><img src={img} alt="QR Code" />  <button onClick={toLogin}>Ir al login</button></div>}
        </div>
    );
}

export default Register;
