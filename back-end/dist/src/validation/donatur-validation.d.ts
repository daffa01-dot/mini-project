import * as zod from "zod";
export declare class DonaturValidation {
    static readonly REGISTER: zod.ZodObject<{
        body: zod.ZodObject<{
            email: zod.ZodString;
            password: zod.ZodString;
            namaLengkap: zod.ZodString;
            noWhatsapp: zod.ZodOptional<zod.ZodString>;
        }, zod.z.core.$strip>;
    }, zod.z.core.$strip>;
    static readonly LOGIN: zod.ZodObject<{
        body: zod.ZodObject<{
            email: zod.ZodString;
            password: zod.ZodString;
        }, zod.z.core.$strip>;
    }, zod.z.core.$strip>;
}
//# sourceMappingURL=donatur-validation.d.ts.map