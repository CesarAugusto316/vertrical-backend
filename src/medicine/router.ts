import { Router } from 'express';
import { getAll } from './controller';


export const medicinesRouter = Router();

medicinesRouter.route('/')
  .get(getAll);
