const express = require('express');
const isLoggedIn = require('./middleware/isLoggedIn');
const createTodosRoute = require('./routes/createTodosRoute');
const readTodosRoute = require('./routes/readTodosRoute');
const updateTodosRoute = require('./routes/updateTodosRoute');


const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.post('/todos', isLoggedIn, createTodosRoute);
router.get('/todos', isLoggedIn, readTodosRoute);
router.put('/todos/:id', isLoggedIn, updateTodosRoute);


module.exports = router;