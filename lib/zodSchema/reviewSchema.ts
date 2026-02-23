import { z } from "zod";

export const reviewFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  project: z.string().min(2, {
    message: "Project type must be at least 2 characters.",
  }),
  rating: z.number().min(1).max(5),
  review: z.string().min(10, {
    message: "Review must be at least 10 characters.",
  }),
  completionDate: z.string({
    required_error: "Please select when the project was completed.",
  }),
  code: z.number(),
});
