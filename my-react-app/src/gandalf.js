import React from 'react';
import { useNavigate } from 'react-router';

const Gandalf = () => {

    const toLogin = () => {
        navigate('/login')
    }

    const toShowUsers = () => {
        navigate('/show-users')
    }

    const navigate = useNavigate();
    return (
        <div className="video-player">
            <img src='https://i.kym-cdn.com/entries/icons/facebook/000/027/879/yobammarere.jpg' alt='logo'></img>
            <h1>TE LOGGEASTEEEE!!!</h1>
            <button onClick={toShowUsers}>Ver xml</button>
            <button onClick={toLogin}>Ir al login</button>
        </div>
    );
};

export default Gandalf;
