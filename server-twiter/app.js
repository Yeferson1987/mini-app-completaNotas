import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import postsRouter from './src/routes/index.js';
import errorHandler from './src/controllers/errorControllers.js';
import { PORT } from './env.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/posts', postsRouter);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
