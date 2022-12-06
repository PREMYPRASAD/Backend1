const express = require('express');
const router = express.Router();

const usercntrlr = require('../controllers/user')

//read user list 
router.get('/userlist', usercntrlr.getAllUser)

// read single user detail
router.get('/user/:id', usercntrlr.getOneUser)

// add new user
router.post('/user', usercntrlr.addUser)

// update user detail
router.put('/user', usercntrlr.updateUser)

// delete user detail
router.delete('/user/:id', usercntrlr.deleteUser)


// Login Api
router.post('/login', usercntrlr.login);





module.exports = router;