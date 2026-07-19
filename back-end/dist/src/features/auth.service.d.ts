import { AuthLoginInput, AuthRegisterInput } from "./auth.validation";
export declare class AuthService {
    static register({ body }: {
        body: AuthRegisterInput;
    }): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        namaLengkap: string;
        noWhatsapp: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    static login({ body }: {
        body: AuthLoginInput;
    }): Promise<{
        safeUser: {
            shelter: {
                id: string;
                noWhatsapp: string;
                namaShelter: string;
                deskripsi: string;
                kota: string;
                alamatLengkap: string;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
                status: import(".prisma/client").$Enums.Status;
                fotoBanner: string | null;
                isAktif: boolean;
                userId: string;
            } | null;
            id: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            namaLengkap: string;
            noWhatsapp: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
        token: string;
    }>;
    static me(userId: string): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        namaLengkap: string;
        noWhatsapp: string | null;
        shelter: {
            id: string;
            namaShelter: string;
        } | null;
    }>;
}
//# sourceMappingURL=auth.service.d.ts.map