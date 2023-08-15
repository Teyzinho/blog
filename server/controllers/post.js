const { cloudinary } = require('../config/cloudinary');
// const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const Post = require('../models/post.model')
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cookieParser());

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

const PAGE_SIZE = 6;

exports.get = async (req, res) => {
    const { page = 1 } = req.query;

    try {
      const totalCount = await Post.countDocuments();
      const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  
      const posts = await Post.find()
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
    const {id} = req.params
    const postDoc = await Post.findById(id).populate('author', ['name'])
    res.status(200).json(postDoc)
}
