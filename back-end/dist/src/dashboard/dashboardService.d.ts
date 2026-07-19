export declare class DashboardService {
    private static getDateFilter;
    static getShelterDashboard(shelterId: string, year?: number, month?: number): Promise<{
        summary: {
            totalSatwa: number;
            totalDonasi: number;
            totalPending: number;
            totalLaporan: number;
        };
        recentDonations: ({
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
            } | null;
            donatur: {
                id: string;
                email: string;
                role: import(".prisma/client").$Enums.Role;
                password: string;
                namaLengkap: string;
                noWhatsapp: string | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            shelterId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            status: import(".prisma/client").$Enums.Status;
            donaturId: string;
            nominal: number;
            satwaId: string | null;
            buktiResi: string;
            catatan: string | null;
            alasanDitolak: string | null;
            diverifikasiAt: Date | null;
        })[];
    }>;
    static getDonorDashboard(donaturId: string, year?: number, month?: number): Promise<{
        summary: {
            totalNominal: number;
            jumlahDonasi: number;
            pending: number;
            verified: number;
        };
        recentDonations: ({
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
            } | null;
            donatur: {
                id: string;
                email: string;
                role: import(".prisma/client").$Enums.Role;
                password: string;
                namaLengkap: string;
                noWhatsapp: string | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            shelterId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            status: import(".prisma/client").$Enums.Status;
            donaturId: string;
            nominal: number;
            satwaId: string | null;
            buktiResi: string;
            catatan: string | null;
            alasanDitolak: string | null;
            diverifikasiAt: Date | null;
        })[];
    }>;
    static getAdminDashboard(year?: number, month?: number): Promise<{
        summary: {
            totalUser: number;
            totalShelter: number;
            totalSatwa: number;
            totalDonasi: number;
        };
        recentDonations: ({
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
            } | null;
            donatur: {
                id: string;
                email: string;
                role: import(".prisma/client").$Enums.Role;
                password: string;
                namaLengkap: string;
                noWhatsapp: string | null;
                createdAt: Date;
                updatedAt: Date;
                deletedAt: Date | null;
            };
        } & {
            id: string;
            shelterId: string;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            status: import(".prisma/client").$Enums.Status;
            donaturId: string;
            nominal: number;
            satwaId: string | null;
            buktiResi: string;
            catatan: string | null;
            alasanDitolak: string | null;
            diverifikasiAt: Date | null;
        })[];
    }>;
}
//# sourceMappingURL=dashboardService.d.ts.map