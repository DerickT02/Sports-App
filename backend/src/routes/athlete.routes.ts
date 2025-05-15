import { Router } from 'express';
import {
  getAllAthletes,
  addAthlete,
  changeAthlete,
  removeAthlete,
} from '../controllers/athlete.controller';

const router = Router();

router.route('/')
  .get(getAllAthletes)
  .post(addAthlete);

router.route('/:id')
  .put(changeAthlete)
  .delete(removeAthlete);

export default router;
