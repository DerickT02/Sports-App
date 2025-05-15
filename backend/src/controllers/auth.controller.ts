import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

const signToken = (id: string) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, { expiresIn: '7d' });

export const register: RequestHandler = async (req, res) => {
  const { email, password, role } = req.body;
  if (await User.findOne({ email })) {
    res.status(409).json({ msg: 'Email already in use' });
    return;
  }
  const user = await User.create({ email, password, role });
  res.status(201).json({
    token: signToken(user.id),
    user: { id: user.id, email: user.email, role: user.role },
  });
};

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    res.status(401).json({ msg: 'Invalid credentials' });
    return;
  }
  res.json({
    token: signToken(user.id),
    user: { id: user.id, email: user.email, role: user.role },
  });
};
