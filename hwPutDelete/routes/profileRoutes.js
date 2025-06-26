const express = require('express');
const profile = require('../models/profile');
const router = express.Router();

// Get all customers
router.get('/profiles', async (req, res) => {
    try {
        const profiles = await profile.find();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;