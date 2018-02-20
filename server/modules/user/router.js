'use strict';

const express = require('express');
const router = express.Router({ caseSensitive: true });
const userbl = require('./userbl');

router.post('/user/signup', userbl.signup);
router.post('/user/signin', userbl.signin);
router.put('/user', userbl.editProfile);
router.get('/users/search', userbl.searchUsers);
router.get('/user', userbl.getUserById);
router.get('/user/:userId', userbl.getUserById);
router.get('/users', userbl.allUser);
router.delete('/user', userbl.deleteUserById);
router.delete('/user/:userId', userbl.deleteUserById);

module.exports = router;