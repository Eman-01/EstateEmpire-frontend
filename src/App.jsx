import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./pages/Home";
import AgentPage from "./pages/AgentPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Home />} />
        <Route path="/buy" element={<Home />} />
        <Route
          path="/signup"
          element={<Signup setIsAuthenticated={setIsAuthenticated} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />}
        />
        <Route path="/agent" element={<AgentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
