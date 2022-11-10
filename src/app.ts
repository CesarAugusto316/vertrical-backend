import express from 'express';
import cors from 'cors';
import { medicinesRouter } from './medicine/router';
import { defaultErrorHandler } from './middlewares/defaultErrorHandler';


export const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/medicines', medicinesRouter);
app.use(defaultErrorHandler);
