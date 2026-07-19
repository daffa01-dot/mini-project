import * as zod from "zod";

export class DashboardValidation {
  static readonly GET_STATS = zod.object({
    query: zod.object({
      start: zod.string().datetime().optional(),
      end: zod.string().datetime().optional(),
    }),
  });
}

export type DashboardQueryInput = zod.infer<
  typeof DashboardValidation.GET_STATS
>["query"];
