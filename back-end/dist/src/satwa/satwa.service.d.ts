export declare class SatwaService {
    static getAllSatwa(): Promise<({
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
        };
    } & {
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
    })[]>;
    static getSatwaById(id: string): Promise<{
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
        };
    } & {
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
    }>;
    static updateSatwa(userId: string, satwaId: string, payload: any, file?: Express.Multer.File): Promise<{
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
    }>;
    static deleteSatwa(userId: string, satwaId: string): Promise<{
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
    }>;
    static create(userId: string, payload: any, file?: Express.Multer.File): Promise<{
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
    }>;
    static getMyAnimals(userId: string): Promise<({
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
        };
    } & {
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
    })[]>;
}
//# sourceMappingURL=satwa.service.d.ts.map