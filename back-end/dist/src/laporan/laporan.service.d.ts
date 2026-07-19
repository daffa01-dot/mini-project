interface UserPayload {
    id: string;
    role: "SUPER_ADMIN" | "SHELTER";
}
export declare class LaporanService {
    static createLaporan(data: {
        judul: string;
        deskripsi: string;
        satwaId: string;
        fotoUrl: string;
        userPayload: UserPayload;
    }): Promise<{
        id: string;
        deskripsi: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        satwaId: string;
        foto: string | null;
        judul: string;
        fotoPublicId: string | null;
    }>;
    static getLaporanBySatwa(satwaId: string): Promise<{
        id: string;
        deskripsi: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        satwaId: string;
        foto: string | null;
        judul: string;
        fotoPublicId: string | null;
    }[]>;
    static deleteLaporan(id: string, userPayload: UserPayload): Promise<{
        id: string;
        deskripsi: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        satwaId: string;
        foto: string | null;
        judul: string;
        fotoPublicId: string | null;
    }>;
    static getDetail(id: string): Promise<{
        satwa: {
            id: string;
            shelterId: string;
            nama: string;
            foto: string | null;
        };
    } & {
        id: string;
        deskripsi: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        satwaId: string;
        foto: string | null;
        judul: string;
        fotoPublicId: string | null;
    }>;
    static updateLaporan(data: {
        laporanId: string;
        judul?: string;
        deskripsi?: string;
        fotoUrl?: string;
        userPayload: any;
    }): Promise<{
        id: string;
        deskripsi: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        satwaId: string;
        foto: string | null;
        judul: string;
        fotoPublicId: string | null;
    }>;
}
export {};
//# sourceMappingURL=laporan.service.d.ts.map