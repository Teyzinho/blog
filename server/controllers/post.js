const { cloudinary } = require('../config/cloudinary');
const Post = require('../models/post.model')
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

exports.create = async (req, res) => {
    const { summary, content, title, img, categories } = req.body

    try {
        const uploadResponse = await cloudinary.uploader.upload(img)
        const imgUrl = uploadResponse.url;

        const { token } = req.cookies;

        jwt.verify(token, secret, {}, async (err, info) => {
            if (err) throw err;

            const postDoc = await Post.create({
                title,
                summary,
                content,
                imgUrl,
                author: info.id,
                categories
            })

            res.status(201).json(postDoc)

        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

exports.get = async (req, res) => {
    const PAGE_SIZE = 6;
    const { page = 1, category } = req.query;

    try {
        const totalCount = await Post.countDocuments();
        const totalPages = Math.ceil(totalCount / PAGE_SIZE);

        let query = Post.find()

        if (category) {
            query = query.where('categories').in(category)
        }

        const posts = await query
            .skip((page - 1) * PAGE_SIZE)
            .limit(PAGE_SIZE)
            .populate('author', ['name'])
            .sort({ createdAt: -1 })
            .exec();


        res.json({ posts, totalPages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
}

exports.geyById = async (req, res) => {
    const { id } = req.params
    const postDoc = await Post.findById(id).populate('author', ['name'])
    res.status(200).json(postDoc)
}

exports.getcategories = async (req, res) => {
    try {
        const allPosts = await Post.find();
        const allCategoriesSet = new Set();

        allPosts.forEach((post) => {
            post.categories.forEach((category) => {
                allCategoriesSet.add(category);
            });
        });

        const allCategoriesArray = Array.from(allCategoriesSet);
        const sortedCategories = allCategoriesArray.sort();

        res.json(sortedCategories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching categories' });
    }
}