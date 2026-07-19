import * as z from 'zod';
export declare const checkoutDonasiFormSchema: z.ZodObject<{
    nominal: z.ZodCoercedNumber<unknown>;
    catatan: z.ZodOptional<z.ZodString>;
    satwaId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    shelterId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const verifikasiDonasiFormSchema: z.ZodObject<{
    statusBaru: z.ZodEnum<{
        DIVERIFIKASI: "DIVERIFIKASI";
        DITOLAK: "DITOLAK";
    }>;
    alasanDitolak: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare class DonasiValidation {
    static readonly CHECKOUT: z.ZodObject<{
        body: z.ZodObject<{
            nominal: z.ZodCoercedNumber<unknown>;
            catatan: z.ZodOptional<z.ZodString>;
            satwaId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
            shelterId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    static readonly VERIFIKASI: z.ZodObject<{
        params: z.ZodObject<{
            donasiId: z.ZodString;
        }, z.core.$strip>;
        body: z.ZodObject<{
            statusBaru: z.ZodEnum<{
                DIVERIFIKASI: "DIVERIFIKASI";
                DITOLAK: "DITOLAK";
            }>;
            alasanDitolak: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}
export type CheckoutDonasiInput = z.infer<typeof DonasiValidation.CHECKOUT>;
export type VerifikasiDonasiInput = z.infer<typeof DonasiValidation.VERIFIKASI>;
export type CheckoutDonasiFormInput = z.infer<typeof checkoutDonasiFormSchema>;
//# sourceMappingURL=donasi.validation.d.ts.map