import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import RentPage from './RentPage';
import BuyPage from './BuyPage';
import Login from './Login';
import SignUp from './SignUp';

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
