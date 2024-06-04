import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import notasRouter from './src/routes/notasRoutes.js';
import { PORT } from './env.js';
import { errorController, notFoundController } from './src/controllers/errors/index.js';


const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/posts', notasRouter);
app.use(errorController);
app.use(notFoundController);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
