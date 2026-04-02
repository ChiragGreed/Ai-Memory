import express from 'express';
import ItemRouter from './routes/ItemRoutes.js';
import CollectionRouter from './routes/CollectionRoutes.js';


import cookieParser from 'cookie-parser';
import cors from 'cors';
import GraphRouter from './routes/GraphRoutes.js';
import authRoutes from './routes/authRoutes.js';
import IntegrationRouter from './routes/IntegrationRoute.js';
import path from path

const app = express();
const publicFile = path.join(__dirname, "../", "public")

app.use(express.static(publicFile))

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser());

app.use('/', IntegrationRouter);
app.use('/api/auth', authRoutes);
app.use('/api/items', ItemRouter);
app.use('/api/collections', CollectionRouter);
app.use('/api/knowledgeGraph', GraphRouter);

export default app;