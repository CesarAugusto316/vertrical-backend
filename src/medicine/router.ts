import { Router } from 'express';
import { getAll, search } from './controller';


export const medicinesRouter = Router();

medicinesRouter.route('/')
  .get(getAll);

medicinesRouter.route('/search')
  .get(search);
