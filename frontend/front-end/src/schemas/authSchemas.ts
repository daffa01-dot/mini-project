import { z } from "zod";

export const RegisterSchema = z.object({
  namaLengkap: z
    .string()
    .min(3, "Nama minimal 3 karakter"),

  email: z
    .string()
    .email("Email tidak valid"),

  password: z
    .string()
    .min(6, "Password minimal 6 karakter"),

  role: z.enum(["DONATUR", "SHELTER"]).optional(),

  namaShelter: z.string().optional(),

  noWhatsapp: z.string().optional(),

  kota: z.string().optional(),

  alamatLengkap: z.string().optional(),

  deskripsi: z.string().optional(),
});

export const LoginSchema = z.object({
  email: z
    .string()
    .email(),

  password: z
    .string()
    .min(6),
});