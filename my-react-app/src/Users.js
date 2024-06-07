import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

function ShowUsers() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login')
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/show-users');
                setUsers(response.data);
            } catch (err) {
                setError('Error al obtener los usuarios.');
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="show-users">
            <button onClick={toLogin}>Ir al login</button>
            <h2>Registered Users</h2>
            {error && <p>{error}</p>}
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <p>Username: {user.username}</p>
                        <p>Password: {user.password}</p>
                        <p>2FA Secret: {user.secret}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShowUsers;
