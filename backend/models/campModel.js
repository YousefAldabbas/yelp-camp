const mongoose = require('mongoose');

const campSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    image: {
        type: String,
        default:"https://images.unsplash.com/photo-1533873984035-25970ab07461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    price:{
        type: Number,
        required: [true, 'Price is required']
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    writer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Camp', campSchema);