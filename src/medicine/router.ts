import { Router } from 'express';
import { getAll, getByID, search } from './controller';


export const medicinesRouter = Router();

medicinesRouter.route('/').get(getAll);
medicinesRouter.route('/:id').get(getByID);
medicinesRouter.route('/search').post(search);
