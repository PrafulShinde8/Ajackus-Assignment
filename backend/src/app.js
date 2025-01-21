// // filepath: /backend/src/app.js
// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const bodyParser = require('body-parser');
// const connectDB = require('./config/db');
// const userRoutes = require('./routes/users');

// const app = express();

// // Connect to MongoDB
// connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // filepath: /c:/Users/prafu/OneDrive/Desktop/user-management-dashboard/src/services/api.js
// import axios from 'axios';

// const  MONGO_URI= 'http://localhost:5000/api/users';

// export const fetchUsers = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error fetching users: ' + error.message);
//     }
// };

// export const getUser = async (userId) => {
//     try {
//         const response = await axios.get(`${API_URL}/${userId}`);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error fetching user: ' + error.message);
//     }
// };

// export const addUser = async (user) => {
//     try {
//         const response = await axios.post(API_URL, user);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error adding user: ' + error.message);
//     }
// };

// export const updateUser = async (userId, user) => {
//     try {
//         const response = await axios.put(`${API_URL}/${userId}`, user);
//         return response.data;
//     } catch (error) {
//         throw new Error('Error updating user: ' + error.message);
//     }
// };

// export const deleteUser = async (userId) => {
//     try {
//         await axios.delete(`${API_URL}/${userId}`);
//     } catch (error) {
//         throw new Error('Error deleting user: ' + error.message);
//     }
// };


const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow only this origin
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