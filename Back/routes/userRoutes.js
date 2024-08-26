// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Adjust the path if necessary

// Route to add a new user
router.post('/users', userController.addUser);

// Route to delete a user
router.delete('/users/:id', userController.deleteUser);

// Route to update a user
router.put('/users/:id', userController.updateUser);

// Route to get all users
router.get('/users', userController.getAllUsers);

// Route to get a user by ID
router.get('/users/:id', userController.getUserById);

module.exports = router;
