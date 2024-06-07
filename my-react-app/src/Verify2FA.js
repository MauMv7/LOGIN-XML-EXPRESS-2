import React, { useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useLocation, useNavigate } from 'react-router-dom';

function Verify2FA() {
    const location = useLocation();
    const token = location.state?.token || '';
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login')
    }


    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/verify-2fa',
                qs.stringify({
                    token: token,
                    code: code,
                }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            setMessage(response.data);
            navigate('/gandalf')
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error al verificar 2FA');
        }
    };

    return (
        <div className="verify-2fa-container">
            <h2>Verify 2FA</h2>
            <form onSubmit={handleVerify}>
                <div>
                    <label>2FA Code:</label>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                </div>
                <button type="submit">Verify</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={toLogin}>Ir al login</button>
        </div>
    );
}

export default Verify2FA;
