import { RequestHandler } from 'express';
import {
  listAthletes,
  createAthlete,
  updateAthlete,
  deleteAthlete,
} from '../services/athlete.service';
import { catchAsync } from '../utils/catchAsync';

/** GET /api/athletes */
export const getAllAthletes: RequestHandler = catchAsync(async (_req, res) => {
  const athletes = await listAthletes();
  res.json(athletes);
});

/** POST /api/athletes */
export const addAthlete: RequestHandler = catchAsync(async (req, res) => {
  const athlete = await createAthlete(req.body);
  res.status(201).json(athlete);
});

/** PUT /api/athletes/:id */
export const changeAthlete: RequestHandler = catchAsync(async (req, res) => {
  const athlete = await updateAthlete(req.params.id, req.body);
  res.json(athlete);
});

/** DELETE /api/athletes/:id */
export const removeAthlete: RequestHandler = catchAsync(async (req, res) => {
  await deleteAthlete(req.params.id);
  res.status(204).end();
});