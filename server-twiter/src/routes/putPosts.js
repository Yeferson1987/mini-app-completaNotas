import getPool from '../db/getPool.js';

export const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const pool = await getPool();
        const [result] = await pool.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Post no encontrado' });
            return;
        }
        res.json({ id, title, content });
    } catch (err) {
        next(err);
    }
};
