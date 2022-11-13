import { RequestHandler } from 'express';
import { ILike } from 'typeorm';
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

export const getByID: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return next(new HttpError(400, 'id must be provided'));
    }

    const medicine = await MedicineRepo.findOneBy({ id: Number(id) });

    if (!medicine) {
      return next(new HttpError(404, 'not medicines found'));
    }

    res.status(200).json({
      medicine
    });
  } catch (error) {
    next(error);
  }
};

export const search: RequestHandler = async (req, res, next) => {
  try {
    const { title } = req.query;

    if (!title) {
      return next(new HttpError(400, 'The query-string was not provided'));
    }

    const medicines = await MedicineRepo.find({
      where: {
        title: ILike(`%${title}%`)
      }
    });

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
