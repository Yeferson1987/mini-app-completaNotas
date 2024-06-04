const validateNota = (req, res, next) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'El título y el contenido son requeridos' });
    }

    next();
};

export default validateNota;