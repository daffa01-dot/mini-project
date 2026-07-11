import * as zod from 'zod';

export class DashboardValidation {
  static readonly GET_STATS = zod.object({
    query: zod.object({
      // Menggunakan .string().datetime() untuk memastikan format tanggal ISO 8601
      // Atau .optional() agar tetap bisa diakses tanpa parameter (default ke hari ini)
      start: zod.string().datetime().optional(),
      end: zod.string().datetime().optional(),
    }),
  });
}

// Export tipenya agar bisa digunakan di Service
export type DashboardQueryInput = zod.infer<typeof DashboardValidation.GET_STATS>['query'];