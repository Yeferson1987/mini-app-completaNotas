const validateId = (req, res, next) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'ID es requerido' });
    }

   next();
};

export default validateId;