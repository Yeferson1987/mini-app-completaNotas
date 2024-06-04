import express from 'express';
import { getAllPosts, getPostById } from '../controllers/notas/getPosts.js';
import { createPost } from '../controllers/notas/postPosts.js';
import { updatePost } from '../controllers/notas/putPosts.js';
import { deletePost } from '../controllers/notas/deletePosts.js';
import { validateNota, validateId } from '../service/index.js';


const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', validateNota, createPost);
router.put('/:id', validateNota, updatePost);
router.delete('/:id', validateId, deletePost);

export default router;