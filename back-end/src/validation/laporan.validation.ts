import { z } from 'zod';

export const CreateLaporanSchema = z.object({
  judul: z.string().min(5, { message: "Judul kabar minimal 5 karakter" }),
  deskripsi: z.string().min(10, { message: "Deskripsi update kondisi minimal 10 karakter" }),
  satwaId: z.string().min(1, { message: "Target satwa asuhan wajib dipilih" }),
});