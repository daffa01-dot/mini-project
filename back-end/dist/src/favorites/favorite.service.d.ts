export declare class FavoritesService {
    static addSatwaFavorite(userId: string, satwaId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        satwaId: string;
    }>;
    static addShelterFavorite(userId: string, shelterId: string): Promise<{
        id: string;
        shelterId: string;
        createdAt: Date;
        userId: string;
    }>;
    static listFavorites(userId: string): Promise<{
        satwa: {
            id: string;
            shelterId: string;
            deskripsi: string | null;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            status: import("@prisma/client").$Enums.StatusSatwa;
            nama: string;
            jenis: import("@prisma/client").$Enums.JenisSatwa;
            ras: string | null;
            umur: number;
            kelamin: import("@prisma/client").$Enums.KelaminSatwa;
            foto: string | null;
            danaTerkumpul: number;
        }[];
        shelters: {
            id: string;
            noWhatsapp: string;
            namaShelter: string;
            deskripsi: string;
            kota: string;
            alamatLengkap: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            status: import("@prisma/client").$Enums.Status;
            fotoBanner: string | null;
            isAktif: boolean;
            userId: string;
        }[];
    }>;
    static removeFavorite(bookmarkId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        userId: string;
        satwaId: string;
    } | {
        id: string;
        shelterId: string;
        createdAt: Date;
        userId: string;
    }>;
}
//# sourceMappingURL=favorite.service.d.ts.map