const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('User Home Page');
});

router.get('/users', (req, res) => {
    res.send('User - List');
});

router.get('/login', (req, res) => {
    res.send('User logged in');
});

router.get('/register', (req, res) => {
    res.send('User registered');
});

module.exports = router;