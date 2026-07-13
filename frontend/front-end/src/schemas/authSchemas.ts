import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export const registerDonaturSchema = z
  .object({
    namaLengkap: z.string().min(3),

    email: z.email(),

    noWhatsapp: z.string().optional(),

    password: z.string().min(6),

    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak sama",
    path: ["confirmPassword"],
  });

export const registerShelterSchema = registerDonaturSchema
  .extend({
    namaShelter: z.string().min(3),

    kota: z.string(),

    alamatLengkap: z.string(),

    deskripsi: z.string(),

    namaBank: z.string(),

    nomorRekening: z.string(),

    atasNamaRekening: z.string(),
  });