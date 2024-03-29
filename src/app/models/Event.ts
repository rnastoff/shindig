import { z } from 'zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg'];

export const EventSchema = z.object({
  name: z.string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  description: z.string().trim().min(3, { message: "Description is required" }),
  imageFile: z.any()
    .refine((file) => {
      return !file || file.size <= MAX_UPLOAD_SIZE;
    }, "File size must be less than 3MB")
    .refine((file) => {
      return ACCEPTED_FILE_TYPES.includes(file.type);
    }, 'File must be a JPG or PNG'),
  date: z.string({ required_error: "Date is required"}).trim(),
  time: z.string({ required_error: "Time is required"}).trim(),
  location: z.string().trim().min(3, { message: "Location is required" }),
  price: z.string(),
  externalLink: z.string().optional(),
  tags: z.array(z.string().optional()),
});
