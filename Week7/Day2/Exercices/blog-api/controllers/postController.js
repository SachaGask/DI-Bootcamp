import Post from '../models/post.js';

// Contrôleurs pour les routes de posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error: error.message });
    }
};

export const getPostById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        
        const post = await Post.getPostById(id);
        
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving post', error: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }
        
        const newPost = await Post.createPost({ title, content });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error: error.message });
    }
};

export const updatePost = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        
        const { title, content } = req.body;
        
        if (!title && !content) {
            return res.status(400).json({ message: 'At least one field (title or content) is required for update' });
        }
        
        const postExists = await Post.getPostById(id);
        
        if (!postExists) {
            return res.status(404).json({ message: 'Post not found' });
        }
        
        const updateData = {};
        if (title) updateData.title = title;
        if (content) updateData.content = content;
        
        const updatedPost = await Post.updatePost(id, updateData);
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        
        const postExists = await Post.getPostById(id);
        
        if (!postExists) {
            return res.status(404).json({ message: 'Post not found' });
        }
        
        const deleted = await Post.deletePost(id);
        
        if (deleted) {
            res.status(200).json({ message: 'Post deleted successfully' });
        } else {
            res.status(500).json({ message: 'Failed to delete post' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error: error.message });
    }
};
