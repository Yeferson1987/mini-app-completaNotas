import { v4 as uuidv4 } from 'uuid';
import getPool from '../db/getPool.js';

export const createPost = async (req, res, next) => {
    try {
        const pool = await getPool();
        const { title, content } = req.body;
        const id = uuidv4();
        await pool.query('INSERT INTO posts (id, title, content) VALUES (?, ?, ?)', [id, title, content]);
        res.status(201).json({ id, title, content });
    } catch (err) {
        next(err);
    }
};