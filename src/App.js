import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';  // Import Navbar
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import Inspirational from './components/InspiringWomen';  // Import new page

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar appears on top on all pages */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/inspirational" element={<Inspirational />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
