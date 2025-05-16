// npx ts-node scripts/createAdmin.ts you@example.com Pa$$w0rd
import 'dotenv/config';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import { connectDB } from '../config/db';

const [email, rawPassword] = process.argv.slice(2);
if (!email || !rawPassword) {
  console.error('Usage: npx ts-node scripts/createAdmin.ts <email> <password>');
  process.exit(1);
}

(async () => {
  await connectDB();
  const hash = await bcrypt.hash(rawPassword, 12);
  const user = await User.create({ email, password: hash, role: 'admin' });
  console.log(`✅  Admin created: ${user.email}  (${user.id})`);
  await mongoose.disconnect();
})();
