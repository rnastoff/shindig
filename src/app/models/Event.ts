import { z } from 'zod';
import { fillTimeArray } from "@/utils/utils";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3;
const ACCEPTED_FILE_TYPES = ['image/png', 'image/jpg'];

const dateRegex = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
const timeRegex = new RegExp(/^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/);

const timeEnum = fillTimeArray() as [string, ...string[]];

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
  date: z.string().refine((value) => console.log("date:", value)),
  time: z.string().regex(timeRegex),
  location: z.string().trim().min(3, { message: "Location is required" }),
  price: z.string(),
  externalLink: z.string().optional(),
  tags: z.array(z.string().optional()),
});


// .refine((value) => value == "Select Date")
// .refine((value) => dateRegex.test(value)),
// z.string().regex(dateRegex),