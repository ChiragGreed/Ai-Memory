import express from 'express';
import { setWildCard } from '../controllers/wildCardController';

const IntegrationRouter = express.Router();

IntegrationRouter.get('/', setWildCard);


export default IntegrationRouter;
