import AthleteModel, { Athlete } from '../models/athlete.model';
import AppError from '../utils/AppError';

export const listAthletes = () => AthleteModel.find();

export const createAthlete = async (payload: Partial<Athlete>) => {
  const exists = await AthleteModel.findOne({ name: payload.name });
  if (exists) throw new AppError('Athlete already exists', 409);

  return AthleteModel.create(payload);
};

export const updateAthlete = async (id: string, payload: Partial<Athlete>) => {
  const doc = await AthleteModel.findByIdAndUpdate(id, payload, { new: true });
  if (!doc) throw new AppError('Athlete not found', 404);
  return doc;
};

export const deleteAthlete = async (id: string) => {
  const doc = await AthleteModel.findByIdAndDelete(id);
  if (!doc) throw new AppError('Athlete not found', 404);
};
