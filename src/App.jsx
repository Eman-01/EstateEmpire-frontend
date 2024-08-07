import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import HomePage from './HomePage';
import RentPage from '../src/components/Rent';
import BuyPage from '../src/components/Buy';
import Login from './Login';
import SignUp from './Signup';

function App() {
  return (
    <>
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/buy" element={<BuyPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
