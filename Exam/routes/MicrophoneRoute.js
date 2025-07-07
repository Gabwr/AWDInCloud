const express = require('express');
const microphonedb = require('../models/microphone');
const router = express.Router();


router.get('/microphones', async (req, res) => {
    try {
        const microphone = await microphonedb.find();
        res.json(microphone);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/microphones', async (req, res) => {
    const microphone = new microphonedb({
        SerialNumber: req.body.SerialNumber,
        Brand: req.body.Brand,
        Model: req.body.Model,
        Size: req.body.Size,
        New: req.body.New,
        Stock: req.body.Stock,
        Price: req.body.Price
    });
    if(!microphone.SerialNumber|| microphone.SerialNumber === '' ) {
        return res.status(400).json({ message: 'SerialNumber must be completed' });
    }
    if(!microphone.Brand || microphone.Brand === '' ) {
        return res.status(400).json({ message: 'Brand must be completed' });
    }
    if(!microphone.Model || microphone.Model === '' ) {
        return res.status(400).json({ message: 'Model must be completed' });
    }
    if(!microphone.Size || microphone.Size === '' ) {
        return res.status(400).json({ message: 'Size must be greater than 0' });
    }
    if(microphone.New === undefined) {
        return res.status(400).json({ message: 'New must be true or false' });
    }
    if(!microphone.Stock || microphone.Stock < 0 ) {
        return res.status(400).json({ message: 'Stock must be greater than or equal to 0' });
    }
    if(!microphone.Price || microphone.Price <= 0 ) {
        return res.status(400).json({ message: 'Price must be greater than 0' });
    }
    try {
        const newMicrophone = await microphone.save();
        res.status(201).json("Microphone Saved",newMicrophone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/microphones/:SerialNumber', async (req, res) => {
    try {
        const microphone = await microphonedb.findOne({ SerialNumber: req.params.SerialNumber });
        if (!microphone) {
            return res.status(404).json({ message: 'Microphone not found' });
        }
        const microphoneFound = await microphonedb.findOneAndDelete({ SerialNumber: req.params.SerialNumber });
        if (!microphoneFound) {
            return res.status(404).json({ message: 'Microphone not deleted' });
        }
        res.json({ message: 'Microphone deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;