import mongoose, { Schema, Document, model, Model } from "mongoose";

// Interface for the Review model
export interface IReview extends Document {
  name: string;
  project: string;
  rating: number;
  review: string;
  completionDate: string;
}

// Mongoose schema for the Review model
const ReviewSchema = new Schema<IReview>(
  {
    name: { type: String, required: true },
    project: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }, // Added validation for range
    review: { type: String, required: true },
    completionDate: { type: String, required: true }, // Changed to Date type
  },
  { timestamps: true }
);

// Adding indexes for common query fields
ReviewSchema.index({ project: 1 });
ReviewSchema.index({ completionDate: 1 });

// Mongoose model for the Review collection
const Review: Model<IReview> =
  mongoose.models.Review || model<IReview>("Review", ReviewSchema);

export default Review;
