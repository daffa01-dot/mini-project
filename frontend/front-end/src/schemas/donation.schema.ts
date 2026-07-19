import { z } from "zod";

export const checkoutSchema = z.object({
  nominal: z.coerce
    .number()
    .min(10000, "Minimal donasi Rp10.000"),

  catatan: z.string().optional(),

  satwaId: z.string().optional(),

  shelterId: z.string(),
});

export type CheckoutFormValues =
  z.infer<typeof checkoutSchema>;