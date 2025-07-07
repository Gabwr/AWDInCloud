const mongoose = require('mongoose');

const MicrophoneSchema = new mongoose.Schema(
    {
        SerialNumber: { type: String },
        Brand: { type: String },
        Model: { type: String },
        Size: { type: String },
        New: { type: Boolean },
        Stock: { type: Number },
        Price: { type: Number }
    },
    {
        collection: 'Microphones',
    }
);

module.exports = mongoose.model('Microphones', MicrophoneSchema);
