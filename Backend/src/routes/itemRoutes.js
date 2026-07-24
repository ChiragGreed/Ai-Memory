import express from 'express';
import { saveItem, getItems, semanticSearchItems, getItemDetails, resurfaceItems } from '../controllers/itemControllers.js';
import validateUser from '../Middlewares/authMiddlewares/validateUser.js';

const ItemRouter = express.Router();


ItemRouter.post('/save', validateUser, saveItem);

ItemRouter.get('/getItems', validateUser, getItems);

ItemRouter.get("/searchItems", validateUser, semanticSearchItems);

ItemRouter.get("/resurfacing", validateUser, resurfaceItems);

ItemRouter.get('/:itemId', validateUser, getItemDetails);



export default ItemRouter;

