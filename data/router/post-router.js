const express = require('express');
// this brings in express
const Post= require('../db.js');
// this brings in the H db
const router = express.Router();
// this allows us to create a mini server. ().listen will not work.



router.get('/', async (req, res) => {
    try{
        const post = await Post.find(req.query);
        // would i iter. with a for loop here if ther is no data in the array?
        // https://flaviocopes.com/express-get-query-variables/
        res.status(200).json(post);
        }catch (error){
            console.log(erronious);
            res.status(500).json({
                message: 'error retrieiving post data.',
            });
        }
    
});
// you cant put the entire url call on this or it will need you to enter 
// it 2 time
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'Post not found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the post by ID',
      });
    });
  });


module.exports = router;