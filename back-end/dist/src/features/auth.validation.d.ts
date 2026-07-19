import * as zod from "zod";
export declare class AuthValidation {
    static readonly REGISTER_USER: zod.ZodObject<{
        body: zod.ZodObject<{
            email: zod.ZodPipe<zod.ZodString, zod.ZodTransform<string, string>>;
            password: zod.ZodString;
            namaLengkap: zod.ZodString;
            noWhatsapp: zod.ZodOptional<zod.ZodString>;
            role: zod.ZodEnum<{
                SUPER_ADMIN: "SUPER_ADMIN";
                SHELTER: "SHELTER";
                DONATUR: "DONATUR";
            }>;
            namaShelter: zod.ZodOptional<zod.ZodString>;
            deskripsi: zod.ZodOptional<zod.ZodString>;
            kota: zod.ZodOptional<zod.ZodString>;
            alamatLengkap: zod.ZodOptional<zod.ZodString>;
            namaBank: zod.ZodOptional<zod.ZodString>;
            atasNamaRekening: zod.ZodOptional<zod.ZodString>;
            nomorRekening: zod.ZodOptional<zod.ZodString>;
        }, zod.z.core.$strip>;
    }, zod.z.core.$strip>;
    static readonly LOGIN_USER: zod.ZodObject<{
        body: zod.ZodObject<{
            email: zod.ZodPipe<zod.ZodString, zod.ZodTransform<string, string>>;
            password: zod.ZodString;
        }, zod.z.core.$strip>;
    }, zod.z.core.$strip>;
}
export type AuthRegisterInput = zod.infer<typeof AuthValidation.REGISTER_USER>["body"];
export type AuthLoginInput = zod.infer<typeof AuthValidation.LOGIN_USER>["body"];
//# sourceMappingURL=auth.validation.d.ts.map