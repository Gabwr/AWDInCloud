const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        profile_id: { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' },
        name: { type: String },
        surname: { type: String },
        personal_id: { type: String },
        born_date: { type: Date },
        email: { type: String },
        phone: { type: String },
        username: { type: String },
        password: { type: String }
    },
    {
        collection: 'users',
    }
);

module.exports = mongoose.model('User', userSchema);
