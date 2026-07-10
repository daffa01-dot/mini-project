import { z } from "zod";
import { Jenishewan, Kelaminhewan } from "@prisma/client";

export class hewanValidation {
  static readonly CREATE = z.object({
    body: z.object({
      nama: z.string(),
      jenis: z.nativeEnum(Jenishewan),
      ras: z.string().optional(),
      umur: z.coerce.number(),
      kelamin: z.nativeEnum(Kelaminhewan),
      deskripsi: z.string().optional(),
      riwayatMedis: z.string().optional(),
    }),
  });
}
