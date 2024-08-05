// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, email, onLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-2xl">EstateEmpire</div>
      <div className="space-x-4">
        <a href="/" className="text-white">Home</a>
        <a href="/rent" className="text-white">Rent</a>
        <a href="/buy" className="text-white">Buy</a>
        {isLoggedIn ? (
          <div className="relative">
            <button className="text-white">{email}</button>
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
              <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Log out</button>
            </div>
          </div>
        ) : (
          <>
            <button onClick={() => navigate('/login')} className="text-white">Sign Up/Login</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
