const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: "Raaj" },
  { id: 2, name: "Nanba" }
];

// Home route
app.get('/', (req, res) => {
  res.send("🚀 Welcome to the User API!");
});

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
