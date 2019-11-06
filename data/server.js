const express = require('express');
const postRouter = require('./router/post-router.js');
const commentRouter = require('./router/comment-router.js');
const server = express();
// This line of code is for posting and putting. (under)  
server.use(express.json());
server.use('api/post', postRouter);
// server.use('api/comments', CommentRouter)
// You can have a lot of smaller routers under sever 
server.get('/', (req, res) => {
    res.send(`
    <h2> Hopefully this works </h2> `);
});
module.exports = server; 
// this is how you can export the server(above).  