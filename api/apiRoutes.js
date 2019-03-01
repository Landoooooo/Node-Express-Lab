const express = require('express');

const postRoutes = require('./posts/postRoutes.js');

const router = express.Router();

router.get('/', (req,res)  => {
    res.status(200).send('Almost to the data!')
});

router.use('/posts', postRoutes)

module.exports = router;