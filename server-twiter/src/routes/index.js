import express from 'express';
import { getAllPosts, getPostById } from './getPosts.js';
import { createPost } from './postPosts.js';
import { updatePost } from './putPosts.js';
import { deletePost } from './deletePosts.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);



export default router;