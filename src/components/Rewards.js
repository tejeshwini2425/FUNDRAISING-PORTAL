import React from 'react';

function Rewards({ rewards = [] }) {
  return (
    <div>
      <h3>Rewards</h3>
      <ul>
        {rewards.map((reward, idx) => (
          <li key={idx}>{reward}</li>
        ))}
      </ul>
    </div>
  );
}

export default Rewards;
