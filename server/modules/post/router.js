'use strict';

const express = require('express');
const router = express.Router({ caseSensitive: true });

const postbl = require('./postbl');

router.post('/post/getAllPost', postbl.getAllPost);
router.post('/post/createPost', postbl.createPost);

module.exports = router;