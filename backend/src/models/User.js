// filepath: /backend/src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);

// // filepath: /backend/src/routes/users.js
// const express = require('express');
// const router = express.Router();
// // const User = require('../models/User');
// console.log(User); // Add this line to log the User object
// // Get all users
// router.get('/api/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Get a user by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// // Create a new user
// router.post('/', async (req, res) => {
//     const { firstName, lastName, email, department } = req.body;
//     const newUser = new User({ firstName, lastName, email, department });
//     try {
//         const user = await newUser.save();
//         res.status(201).json(user);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Update a user
// router.put('/:id', async (req, res) => {
//     const { firstName, lastName, email, department } = req.body;
//     try {
//         const user = await User.findByIdAndUpdate(
//             req.params.id,
//             { firstName, lastName, email, department },
//             { new: true }
//         );
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         res.json(user);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Delete a user
// router.delete('/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id);
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         res.json({ message: 'User deleted' });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// module.exports = router;

