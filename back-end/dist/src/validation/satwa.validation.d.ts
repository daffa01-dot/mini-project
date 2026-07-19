import { z } from "zod";
export declare class SatwaValidation {
    static readonly CREATE: z.ZodObject<{
        body: z.ZodObject<{
            nama: z.ZodString;
            jenis: z.ZodEnum<{
                ANJING: "ANJING";
                KUCING: "KUCING";
                LAINNYA: "LAINNYA";
            }>;
            ras: z.ZodOptional<z.ZodString>;
            umur: z.ZodCoercedNumber<unknown>;
            kelamin: z.ZodEnum<{
                JANTAN: "JANTAN";
                BETINA: "BETINA";
            }>;
            deskripsi: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    static readonly UPDATE: z.ZodObject<{
        body: z.ZodObject<{
            nama: z.ZodOptional<z.ZodString>;
            jenis: z.ZodOptional<z.ZodEnum<{
                ANJING: "ANJING";
                KUCING: "KUCING";
                LAINNYA: "LAINNYA";
            }>>;
            ras: z.ZodOptional<z.ZodString>;
            umur: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
            kelamin: z.ZodOptional<z.ZodEnum<{
                JANTAN: "JANTAN";
                BETINA: "BETINA";
            }>>;
            deskripsi: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<{
                TERSEDIA: "TERSEDIA";
                DIADOPSI: "DIADOPSI";
                TIDAK_AKTIF: "TIDAK_AKTIF";
            }>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}
//# sourceMappingURL=satwa.validation.d.ts.map