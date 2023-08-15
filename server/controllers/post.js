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
    const { summary, content, title, img } = req.body

    try {
        const uploadResponse = await cloudinary.uploader.upload(img)
        const imgUrl = uploadResponse.url;

        const { token } = req.cookies;

        jwt.verify(token, secret, {} , async (err,info) => {
            if(err) throw err;

            const postDoc = await Post.create({
                title,
                summary,
                content,
                imgUrl,
                author: info.id
            })
    
            res.status(201).json(postDoc)

        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

exports.get = async (req, res) => {
    res.json(await Post.find().populate('author' , ['name']))
}
