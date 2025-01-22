const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
// app.use(cors({ credentials: true, origin: 'http://localhost:5000/api/users' || 'http://localhost:3000' }));
app.use(cors({
  credentials: true,
  origin: 'https://ajackus-assignment-sipg.onrender.com/api',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5001;

// Connect to MongoDB
connectDB()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
