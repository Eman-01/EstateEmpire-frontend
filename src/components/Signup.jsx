// src/pages/Signup.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
  });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    const validations = {
      length: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      number: /\d/.test(password),
      specialChar: /[@$!%*?&]/.test(password),
    };
    setPasswordValidations(validations);
    return Object.values(validations).every(Boolean);
  };

  useEffect(() => {
    const isValid = validatePassword(password);
    setIsPasswordValid(isValid);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }
    if (!isPasswordValid) {
      setErrorMessage('Password does not meet the criteria');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        onSignup(email);
        navigate('/');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Signup failed');
      }
    } catch (error) {
      setErrorMessage('Signup failed: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="mb-4 text-center text-2xl">Welcome to EstateEmpire</h2>
          <div className="flex justify-center mb-4">
            <button type="button" className="mr-4 text-gray-600 border-b-2 border-blue-600">New Account</button>
            <button type="button" onClick={() => navigate('/login')} className="text-blue-600">Sign In</button>
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
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Create Password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
            />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <div className="mb-4">
            <p className={`text-sm ${passwordValidations.length ? 'text-green-500' : 'text-red-500'}`}>✔️ At least 8 characters</p>
            <p className={`text-sm ${passwordValidations.lowercase ? 'text-green-500' : 'text-red-500'}`}>✔️ At least 1 lowercase letter</p>
            <p className={`text-sm ${passwordValidations.uppercase ? 'text-green-500' : 'text-red-500'}`}>✔️ At least 1 uppercase letter</p>
            <p className={`text-sm ${passwordValidations.number ? 'text-green-500' : 'text-red-500'}`}>✔️ At least 1 number</p>
            <p className={`text-sm ${passwordValidations.specialChar ? 'text-green-500' : 'text-red-500'}`}>✔️ At least 1 special character (@$!%*?&)</p>
          </div>
          {errorMessage && <p className="text-red-500 text-xs italic mb-4">{errorMessage}</p>}
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

export default Signup;
