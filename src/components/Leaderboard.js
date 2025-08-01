import React from 'react';
import './Leaderboard.css';

const donors = [
  { name: 'Ananya Sharma', amount: 15000 },
  { name: 'Priya Patel', amount: 12000 },
  { name: 'Sneha Reddy', amount: 9000 },
  { name: 'Kavya Singh', amount: 8500 },
  { name: 'Divya Menon', amount: 6000 },
];

const expenses = [
  { item: 'Medical Aid', amount: 18000 },
  { item: 'Education Supplies', amount: 12000 },
  { item: 'Community Events', amount: 7000 },
];

const totalDonations = donors.reduce((sum, donor) => sum + donor.amount, 0);
const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard-list">
        <h2>Top Donors</h2>
        <ul>
          {donors.map((donor, idx) => (
            <li key={idx}>
              <span className="donor-name">{donor.name}</span>
              <span className="donor-amount">₹{donor.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="total">
          <strong>Total Donations:</strong> ₹{totalDonations.toLocaleString()}
        </div>
      </div>

      <div className="expenses-list">
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense, idx) => (
            <li key={idx}>
              <span className="expense-item">{expense.item}</span>
              <span className="expense-amount">₹{expense.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
        <div className="total-expense">
          <strong>Total Expenses:</strong> ₹{totalExpenses.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
