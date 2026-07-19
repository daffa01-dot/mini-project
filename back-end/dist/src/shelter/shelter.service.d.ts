export declare class ShelterService {
    static getAllShelters(filters: {
        search?: string;
        kota?: string;
    }): Promise<any>;
    static getShelterById(id: string): Promise<{
        satwa: {
            id: string;
            shelterId: string;
            deskripsi: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            status: import(".prisma/client").$Enums.StatusSatwa;
            nama: string;
            jenis: import(".prisma/client").$Enums.JenisSatwa;
            ras: string | null;
            umur: number;
            kelamin: import(".prisma/client").$Enums.KelaminSatwa;
            foto: string | null;
            danaTerkumpul: number;
        }[];
    } & {
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
    }>;
}
//# sourceMappingURL=shelter.service.d.ts.map