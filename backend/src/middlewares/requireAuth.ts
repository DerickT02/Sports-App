import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload { id: string }

export const requireAuth: RequestHandler = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header?.startsWith('Bearer ')) {
    res.status(401).json({ msg: 'No token' });
    return;                               // << no Response returned
  }

  try {
    const payload = jwt.verify(
      header.split(' ')[1],
      process.env.JWT_SECRET!
    ) as JwtPayload;

    req.userId = payload.id;
    next();                               // happy path
  } catch {
    res.status(401).json({ msg: 'Invalid / expired token' });
  }
};
