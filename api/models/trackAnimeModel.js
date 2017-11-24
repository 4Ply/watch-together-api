'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AnimeSchema = new Schema({
    userID: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    coverImageURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Anime', AnimeSchema);
