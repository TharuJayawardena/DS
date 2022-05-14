//const { SchemaTypes } = require("mongoose");
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const hotelSchema = new Schema({
    hotelId: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }


},// {timestamps: true}
)


const hotel = mongoose.model('hotel', hotelSchema)

module.exports = hotel
