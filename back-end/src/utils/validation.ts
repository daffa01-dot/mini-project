import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Format email salah"),
  password: z.string().min(9, "Password minimal 9 karakter"),
  role: z.enum(["ADMIN", "SHELTER", "DONATUR"]), 
  fullName: z.string().optional(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
});