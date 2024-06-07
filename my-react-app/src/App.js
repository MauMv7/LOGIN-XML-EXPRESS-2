import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Verify2FA from './Verify2FA';
import Gandalf from './gandalf';
import ShowUsers from './Users';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/*" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/verify-2fa" element={<Verify2FA />} />
                    <Route path="/gandalf" element={<Gandalf />} />
                    <Route path="/show-users" element={<ShowUsers />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
