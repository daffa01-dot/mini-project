import * as zod from "zod";
export declare class DashboardValidation {
    static readonly GET_STATS: zod.ZodObject<{
        query: zod.ZodObject<{
            start: zod.ZodOptional<zod.ZodString>;
            end: zod.ZodOptional<zod.ZodString>;
        }, zod.z.core.$strip>;
    }, zod.z.core.$strip>;
}
export type DashboardQueryInput = zod.infer<typeof DashboardValidation.GET_STATS>["query"];
//# sourceMappingURL=dashboard.validation.d.ts.map