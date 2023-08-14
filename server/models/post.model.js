const mongoose = require('mongoose')
const { Schema, model } = mongoose

const PostSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    sumarry: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

const PostModel = model('Post', PostSchema)

module.exports = PostModel