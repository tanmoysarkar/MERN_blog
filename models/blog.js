const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const BlogSchema = new Schema({
    blog_short_desc: {
        type: String,
        required: true
    },
    blog_name: {
        type: String,
        required: true
    },
    blog_desc: {
        type: String,
        required: true
    },
    blog_image_link: {
        type: String,
        required: false
    },
    blog_by:{
        type: String,
        required: true
    },
    blog_by_author:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Blog = mongoose.model('blog', BlogSchema);