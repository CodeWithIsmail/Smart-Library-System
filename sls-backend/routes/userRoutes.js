const express = require('express');
const { createUser, getUserById } = require('../controllers/userController');

const router = express.Router();

router.post('/api/users', createUser);
router.get('/api/users/:id', getUserById);

module.exports = router;