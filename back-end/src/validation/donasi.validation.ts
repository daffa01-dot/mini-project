import * as z from 'zod';

export const checkoutDonasiFormSchema = z.object({
 nominal: z.coerce
  .number({
    message: "Nominal donasi harus berupa angka murni",
  })
  .min(10000, 'Minimal melakukan donasi adalah Rp 10.000'),

  catatan: z.string().trim().optional(),

  satwaId: z
    .string()
    .uuid('Format ID Satwa harus berupa UUID yang valid')
    .optional()
    .nullable(),

  shelterId: z
    .string()
    .uuid('Format ID Shelter harus berupa UUID yang valid')
    .optional()
    .nullable(),
});

export const verifikasiDonasiFormSchema = z.object({
  statusBaru: z.enum(["DIVERIFIKASI", "DITOLAK"], {
    message: "Status baru wajib diisi dengan DIVERIFIKASI atau DITOLAK"
  }),
  alasanDitolak: z.string().trim().optional(),
});

export class DonasiValidation {
  static readonly CHECKOUT = z.object({
    body: checkoutDonasiFormSchema,
  });

  static readonly VERIFIKASI = z.object({
    params: z.object({
      donasiId: z.string().uuid('Format ID Donasi di parameter URL harus berupa UUID yang valid'),
    }),
    body: verifikasiDonasiFormSchema,
  });
  
}

export type CheckoutDonasiInput = z.infer<typeof DonasiValidation.CHECKOUT>;
export type VerifikasiDonasiInput = z.infer<typeof DonasiValidation.VERIFIKASI>;
export type CheckoutDonasiFormInput = z.infer<typeof checkoutDonasiFormSchema>;
