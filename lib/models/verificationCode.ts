import mongoose, { Schema, Document, model, Model } from "mongoose";

export interface IVerificationCode {
  code: string;
  isUsed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const VerificationCodeSchema = new Schema<IVerificationCode>(
  {
    code: { type: String, required: true, unique: true },
    isUsed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Check if the model already exists, otherwise define it
const VerificationCode: Model<IVerificationCode> =
  mongoose.models.VerificationCode ||
  model<IVerificationCode>("VerificationCode", VerificationCodeSchema);

export default VerificationCode;
