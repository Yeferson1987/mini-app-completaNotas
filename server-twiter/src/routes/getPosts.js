import getPool from '../db/getPool.js';

export const getAllPosts = async (req, res, next) => {
    try {
        const pool = await getPool();
        const [rows] = await pool.query('SELECT * FROM posts');
        res.json(rows);
    } catch (err) {
        next(err);
    }
};

export const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pool = await getPool();
        const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({ error: 'Post no encontrado' });
            return;
        }
        res.json(rows[0]);
    } catch (err) {
        next(err);
    }
};