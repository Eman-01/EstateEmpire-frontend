import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, user }) => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <div className="text-white text-2xl">EstateEmpire</div>
      <div className="flex space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/rent" className="text-white">Rent</Link>
        <Link to="/buy" className="text-white">Buy</Link>
        {isAuthenticated ? (
          <Link to="/profile">
            <img
              src={user?.profileImage || "/default-profile.png"}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        ) : (
          <Link to="/login" className="text-white">Sign Up/Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
