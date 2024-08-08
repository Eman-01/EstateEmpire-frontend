//app.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = (userEmail) => {
    setIsLoggedIn(true);
    setEmail(userEmail);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} email={email} onLogout={handleLogout} />
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
