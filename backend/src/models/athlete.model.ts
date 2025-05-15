import { Schema, model, InferSchemaType } from 'mongoose';

const athleteSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    sport: { type: String, required: true },
    age:   { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

export type Athlete = InferSchemaType<typeof athleteSchema>;
export default model<Athlete>('Athlete', athleteSchema);
