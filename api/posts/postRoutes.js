const express = require('express')

const Posts = require('../../data/db.js');

const router = express.Router();


router.post('/', async (req,res) => {

    try{
        const { title } = req.body;
        const { contents } = req.body;

        const newPost = {title, contents}

        if(title && contents){
            console.log
            const post = await Posts.insert(newPost);
            res.status(200).json(post);
        }else{
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({ error: "There was an error while saving the post to the database" })
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.find();
        res.status(200).json(posts)
    } catch (e) {
        res.status(500).json({
            error: "The posts information could not be retrieved."
        });
    }
});

router.get('/:id', async (req,res) => {
    try{
        const { id } = req.params;
        if(Posts.findById(id)){
            const post = await Posts.findById(id);
            res.status(200).json(post)
        }else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    } catch (e){
        res.status(500).json({ error: "The post information could not be retrieved." })
    }
});

router.delete('/:id', async (req,res) => {
    try{
        const { id } = req.params;
        if(Posts.findById(id)){
            const post = await Posts.remove(id);
            res.status(200).json(post)
        }else{
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    } catch (e) {
        res.status(500).json({ error: "The post could not be removed" })
    }
})

router.put('/:id', async (req,res) => {
    try{
        const { id } = req.params;
        const { title } = req.body;
        const { contents } = req.body;

        if(title && contents && Posts.findById(id)){
            const post = await Posts.update(id, req.body);
            res.status(200).json(post)
        }else{
            res.status(400).json({ errorMessage: "Please provide title and contents for the post." });
        }
    } catch (e) {
        res.status(500).json({ error: "The post information could not be modified." });
    }
})


module.exports = router;