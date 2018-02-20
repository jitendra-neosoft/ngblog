'use strict';

const express = require('express');
const router = express.Router({ caseSensitive: true });

const postbl = require('./postbl');

router.post('/post/getAllPost', postbl.getAllPost);
router.post('/post/createPost', postbl.createPost);
router.post('/post/updatePost', postbl.updatePost);
router.post('/post/deletePost', postbl.deletePost);

module.exports = router;