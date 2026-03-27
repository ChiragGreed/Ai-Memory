import express from 'express';
import ItemRouter from './routes/ItemRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}));

app.use('/api/items', ItemRouter);

export default app;