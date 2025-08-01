import React from 'react';
import './Dashboard.css';

function Dashboard() {
  const leaderboardData = [
    { name: "Aarohi Sharma", amount: 85000 },
    { name: "Nitya Raj", amount: 72000 },
    { name: "Zoya Khan", amount: 65000 },
    { name: "Sneha Iyer", amount: 58000 },
    { name: "Meera Das", amount: 43000 }
  ];

  return (
    <div className="dashboard sky-bg">
      <h1 className="dashboard-title rainbow-text">Welcome, Trailblazer! 💫</h1>
      <p className="quote">"Empowered women empower the world." 🌸</p>

      <div className="dashboard-container">
        {/* Left: Leaderboard */}
        <div className="leaderboard-section card glass">
          <h2>🌟 Top Contributors</h2>
          <ul className="leaderboard-list">
            {leaderboardData.map((entry, index) => (
              <li key={index}>
                <span className="rank">#{index + 1}</span>
                <span className="name">{entry.name}</span>
                <span className="amount">₹ {entry.amount.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Stats */}
        <div className="stats-section">
          <div className="card total">
            <h3>💰 Total Funds Raised</h3>
            <p>₹ 4,50,000</p>
          </div>

          <div className="card expense">
            <h3>📉 Funds Used</h3>
            <p>₹ 1,20,000</p>
          </div>

          <div className="card glow">
            <h3>💡 Goal Progress</h3>
            <p>You've raised ₹12,000 so far. Keep soaring!</p>
          </div>

          <div className="card glow">
            <h3>🤝 Support Circles</h3>
            <p>Connect with women-led fundraisers and collaborate.</p>
          </div>
        </div>
      </div>

      <p className="tagline">“When women support each other, incredible things happen.”</p>
    </div>
  );
}

export default Dashboard;
