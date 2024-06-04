import getPool from '../../db/getPool.js';

export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pool = await getPool();
        const [result] = await pool.query('DELETE FROM posts WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            res.status(404).json({ error: 'Post no encontrado' });
            return;
        }
        res.json({ message: 'Post eliminado' });
    } catch (err) {
        next(err);
    }
};