const mongoose = require('mongoose');

const dustBinSchema = mongoose.Schema({
    location: { type: { lat: Number, lng: Number }, required: true },
    region: { type: String, required: true },
    status: { type: Number, required: true },
    address: { type: String, required: true },
    owner: { type: String, required: true },
});

module.exports = mongoose.model('Dustbin', dustBinSchema);