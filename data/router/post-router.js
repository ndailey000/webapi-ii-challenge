const express = require('express');
// this brings in express
const Post= require('./db.js');
// this brings in the H db
const router = express.Router();
// this allows us to create a mini server. ().listen will not work.
