const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {

    try {

        const [posts, _] = await Post.findAll();

        res.status(200).json({ posts })

    } catch (error) {

        console.log(error);

        next(error);
        
    }

}

exports.createNewPost = async (req, res, next) => {

    try {

        let { title, body } = req.body
    
        let post = new Post(title, body);
    
        post = await post.save();
    
        res.status(200).json({ message: "Post created" })
        
    } catch (error) {

        console.log(error);

        next(error);
        
    }

}

exports.getPostById = async (req, res, next) => {

    try {

        let id = req.params.id;

        const [post, _] = await Post.findById(id);

        res.status(200).json({ post })

    } catch (error) {

        console.log(error);

        next(error);
        
    }

}