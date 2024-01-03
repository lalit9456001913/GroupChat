const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const adminAuthMiddleware = require('../middlewares/adminAuthMiddleware');
const userController = require('../controllers/users/userController');

// Authentication middleware for admin routes

router.get('/', authMiddleware.authenticateUser, userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.put('/:id', adminAuthMiddleware.authenticateUser, userController.editUser);

router.delete('/:id', adminAuthMiddleware.authenticateUser, userController.deleteUser);

router.post('/', adminAuthMiddleware.authenticateUser, userController.createUser);

module.exports = router;
