import { z } from "zod";
import { JenisSatwa, KelaminSatwa } from "@prisma/client";

export class SatwaValidation {
  static readonly CREATE = z.object({
    body: z.object({
      nama: z.string(),
      jenis: z.nativeEnum(JenisSatwa),
      ras: z.string().optional(),
      umur: z.coerce.number(),
      kelamin: z.nativeEnum(KelaminSatwa),
      deskripsi: z.string().optional(),
    }),
  });
}
