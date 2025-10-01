const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const dummyUser = {
  name: "Tejeshwini R",
  referralCode: "tejeshwini2025",
  donations: 1200,
  rewards: ["T-shirt", "Certificate", "Shoutout"]
};

const leaderboard = [
  { name: "Teju", donations: 1200 },
  { name: "Anika", donations: 1000 },
  { name: "Ravi", donations: 800 }
];

app.get('/api/user', (req, res) => {
  res.json(dummyUser);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
