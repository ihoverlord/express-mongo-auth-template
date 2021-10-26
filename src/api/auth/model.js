const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
}, { versionKey: false, timestamps: true });


const authModel = mongoose.model('authentication', authSchema)

module.exports = authModel;