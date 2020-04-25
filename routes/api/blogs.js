const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Project Model 
const Blog = require('../../models/blog');

//@route GET api/blogs
// @desc Get all blogs data
//@access public

router.get('/', (req, res) => {
    Blog.find()
        .sort({date: -1 })
        .then(blogs => res.json(blogs));

});

//@route GET api/blog/id
// @desc Get all blogs data
//@access public

router.post('/edit/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then(editBlog => res.json(editBlog))
        .catch(err => res.status(400).json('Error: ' + err));

});

//@route POST api/blogs
// @desc create an blogs
//@access private

router.post('/', auth,  (req, res) => {
    const newBlog = new Blog({
        blog_short_desc: req.body.blog_short_desc,
        blog_name: req.body.blog_name,
        blog_desc: req.body.blog_desc,
        blog_image_link: req.body.blog_image_link,
        blog_by: req.body.blog_by,
        blog_by_author: req.body.blog_by_author

    });

    newBlog.save().then(blogs => res.json(blogs));
});


//@route UPDATE api/blogs
// @desc update an blogs
//@access private

router.post('/update/:id', auth,  (req, res) => {
    Blog.findById(req.params.id)
        .then(blog => {
            blog.blog_short_desc = req.body.blog_short_desc;
            blog.blog_name = req.body.blog_name;
            blog.blog_desc = req.body.blog_desc;
            blog.blog_image_link = req.body.blog_image_link;
            blog.blog_by = req.body.blog_by;
            blog.blog_by_author = req.body.blog_by_author;

            blog.save()
                .then( () => res.json('Blog Updated!'))
                .catch(err => res.status(400).json()('Error: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//@route DELETE api/blogs/:id
// @desc delete an blogs description
//@access private

router.delete('/:id', auth,  (req, res) => {
    Blog.findById(req.params.id)
    .then(blog => blog.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;
