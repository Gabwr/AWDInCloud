const User = require('../models/user');
const express = require('express');
const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
    try {
        const usersdata = await User.find();
        res.json(usersdata);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/users/:personal_id', async (req, res) => {
    try {
        const { personal_id } = req.params;

        const updatedUser = await User.findOneAndUpdate(
            { personal_id: personal_id }, 
            req.body,                    
            { new: true }                
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/users/:personal_id', async (req, res) => {
    try {
        const { personal_id } = req.params;

        const deletedUser = await User.findOneAndDelete({ personal_id: personal_id });

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;