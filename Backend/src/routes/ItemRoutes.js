import express from 'express';
import { saveItem, getItems, getRelatedItems, semanticSearchItems } from '../controllers/ItemControllers.js';

const ItemRouter = express.Router();

ItemRouter.post('/save', saveItem);

ItemRouter.get('/getItems', getItems);

ItemRouter.get('/getRelatedItems/:itemId', getRelatedItems);

ItemRouter.get("/searchItems", semanticSearchItems);



export default ItemRouter;

