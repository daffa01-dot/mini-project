export declare class DonaturService {
    static register({ body }: {
        body: any;
    }): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        namaLengkap: string;
        noWhatsapp: string | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    static login({ body }: {
        body: any;
    }): Promise<{
        safeUser: {
            id: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
            namaLengkap: string;
            noWhatsapp: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
        };
        token: string;
    }>;
    static getProfile(userId: string): Promise<{
        id: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        namaLengkap: string;
        noWhatsapp: string | null;
        createdAt: Date;
    }>;
    static getStats(userId: string): Promise<{
        totalNominal: number;
        totalTransaksi: number;
    }>;
}
//# sourceMappingURL=donatur-services.d.ts.map