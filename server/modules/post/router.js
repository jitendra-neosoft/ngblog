'use strict';

const express = require('express');
const router = express.Router({ caseSensitive: true });

const postbl = require('./postbl');

router.post('/getAllPost', postbl.getAllPost);

module.exports = router;