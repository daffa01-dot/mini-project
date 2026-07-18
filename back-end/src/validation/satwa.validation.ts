import { z } from "zod";
import {
  JenisSatwa,
  KelaminSatwa,
  StatusSatwa,
} from "@prisma/client";

export class SatwaValidation {
  static readonly CREATE = z.object({
    body: z.object({
      nama: z
        .string()
        .min(3, "Nama satwa minimal 3 karakter")
        .max(100, "Nama satwa maksimal 100 karakter"),

      jenis: z.nativeEnum(JenisSatwa, {
        message: "Jenis satwa tidak valid",
      }),

      ras: z
        .string()
        .max(100, "Ras maksimal 100 karakter")
        .optional(),

      umur: z.coerce
        .number()
        .int("Umur harus berupa angka bulat")
        .min(0, "Umur tidak boleh negatif"),

      kelamin: z.nativeEnum(KelaminSatwa, {
        message: "Kelamin tidak valid",
      }),

      deskripsi: z
        .string()
        .max(1000, "Deskripsi maksimal 1000 karakter")
        .optional(),
    }),
  });

  static readonly UPDATE = z.object({
    body: z.object({
      nama: z
        .string()
        .min(3, "Nama satwa minimal 3 karakter")
        .max(100)
        .optional(),

      jenis: z
        .nativeEnum(JenisSatwa)
        .optional(),

      ras: z
        .string()
        .max(100)
        .optional(),

      umur: z.coerce
        .number()
        .int()
        .min(0)
        .optional(),

      kelamin: z
        .nativeEnum(KelaminSatwa)
        .optional(),

      deskripsi: z
        .string()
        .max(1000)
        .optional(),

      status: z
        .nativeEnum(StatusSatwa)
        .optional(),
    }),
  });
}