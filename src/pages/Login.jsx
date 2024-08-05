// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    onLogin(email);
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-center text-2xl">Welcome to EstateEmpire</h2>
          <div className="flex justify-center mb-4">
            <button onClick={() => navigate('/signup')} className="mr-4 text-blue-600">New Account</button>
            <button className="text-gray-600 border-b-2 border-blue-600">Sign In</button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
