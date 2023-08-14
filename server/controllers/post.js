const { cloudinary } = require('../config/cloudinary');
const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const Post = require('../models/post.model')

exports.create = async (req, res) => {
    const values = req.body

    res.json(values)
    console.log(values)

}
