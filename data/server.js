const express = require('express');
const PostRouter = require('./router/post-router.js');
const CommentRouter = require('./router/comment-router.js');
const server = express();
// This line of code is for posting and putting. (under)  
server.use(express.json());
server.use('api/post', PostRouter);
server.use('api/comments', CommentRouter)
// You can have a lot of smaller routers under sever 
server.get('/', (req, res) => {
    res.send(`
    <h2> Hopefully this works</h2> `);
});
module.exports = server; 
// this is how you can export the server(above). 