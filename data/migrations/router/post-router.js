// const express = require('express');
// // this brings in express
// const Post= require('./db.js');
// // this brings in the H db
// const router = express.Router();
// // this allows us to create a mini server. ().listen will not work.



// router.get('/api/post', async (req, res) => {
//     try{
//         const post = await Post.find(req.query);
//         // would i iter. with a for loop here if ther is no data in the array?
//         // https://flaviocopes.com/express-get-query-variables/
//         res.status(200).json(post);
//         }catch (error){
//             console.log(erronious);
//             res.status(500).json({
//                 message: 'error retrieiving post data.',
//             });
//         }
    
// });




// module.exports = router;