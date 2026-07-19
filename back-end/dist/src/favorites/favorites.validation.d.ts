import * as zod from 'zod';
export declare class FavoritesValidation {
    static readonly ADD_SATWA: zod.ZodObject<{
        body: zod.ZodObject<{
            satwaId: zod.ZodString;
        }, zod.z.core.$strip>;
    }, zod.z.core.$strip>;
    static readonly ADD_SHELTER: zod.ZodObject<{
        body: zod.ZodObject<{
            shelterId: zod.ZodString;
        }, zod.z.core.$strip>;
    }, zod.z.core.$strip>;
}
//# sourceMappingURL=favorites.validation.d.ts.map