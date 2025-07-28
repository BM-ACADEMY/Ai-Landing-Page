require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const paymentRoutes = require('./paymentRoutes');

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.use('/', paymentRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Catch-all route
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});