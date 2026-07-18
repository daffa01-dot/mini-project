import { z } from "zod";

export const animalSchema = z.object({
  nama: z.string().min(3),
  jenis: z.string().min(2),
  ras: z.string().optional(),
  umur: z.coerce.number().min(0),
  kelamin: z.enum(["JANTAN", "BETINA"]),
  deskripsi: z.string().optional(),
});

export type AnimalForm = z.infer<typeof animalSchema>;