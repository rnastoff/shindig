import { z } from 'zod';

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg'];

const timeRegex = new RegExp(/^(0?[1-9]|1[0-2]):([0-5][0-9]) (AM|PM)$/i);
const dateRegex = new RegExp(/^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-(\d{4})$/);

export const EventSchema = z.object({
  name: z.string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" }).optional(),
  description: z.string().trim().min(3, { message: "Description is required" }).optional(),
  imageFile: z.any().optional(),
    // .refine((file) => {
    //   return !file || file.size <= MAX_UPLOAD_SIZE;
    // }, "File size must be less than 3MB")
    // .refine((file) => {
    //   return ACCEPTED_FILE_TYPES.includes(file.type);
    // }, 'File must be a JPG or PNG'),
  date: z.string().regex(dateRegex),
  time: z.string().regex(timeRegex),
  location: z.string().trim().min(3, { message: "Location is required" }).optional(),
  price: z.string().optional(),
  externalLink: z.string().optional(),
  tags: z.string().optional(),
});

//.refine((thing) => console.log("Here: ", thing))

// tags: z.array(z.string().optional()),