const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({

    comment: {
        type: String,
        required: [true, 'Comment is required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    camp: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Camp',
        required: [true, 'Camp is required']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', commentSchema);