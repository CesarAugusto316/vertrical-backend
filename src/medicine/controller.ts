import { RequestHandler } from 'express';
import { AppDataSource } from '../data-source';
import { HttpError } from '../helpers/HttpError';
import { Medicine } from './entity';


const MedicineRepo = AppDataSource.getRepository(Medicine);

export const getAll: RequestHandler = async (req, res, next) => {
  try {
    const medicines = await MedicineRepo.find();

    if (!medicines) {
      return next(new HttpError(404, 'not medicines found'));
    }

    res.status(200).json({
      medicines
    });
  } catch (error) {
    next(error);
  }
};

export const search: RequestHandler = async (req, res, next) => {
  try {
    const medicines = await MedicineRepo.find({ where: { title: req.params.title } });

    if (!medicines) {
      return next(new HttpError(404, 'not medicines found'));
    }

    res.status(200).json({
      medicines
    });
  } catch (error) {
    next(error);
  }
};
