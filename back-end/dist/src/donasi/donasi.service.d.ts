import { Status } from "@prisma/client";
interface GetRiwayatProps {
    role: string;
    userId: string;
    shelterId?: string;
}
interface CreateCheckoutProps {
    nominal: number;
    catatan?: string;
    donaturId: string;
    satwaId?: string;
    shelterId?: string;
}
interface UploadBuktiProps {
    donasiId: string;
    donaturId: string;
    buktiResiPath: string;
}
type VerifikasiDonasiProps = {
    userId: string;
    donasiId: string;
    statusBaru: Status;
    alasanDitolak?: string;
    shelterId?: string;
};
export declare class DonasiService {
    static createCheckout({ nominal, catatan, donaturId, satwaId, shelterId, }: CreateCheckoutProps): Promise<{
        donasiId: string;
        nominal: number;
        status: import("@prisma/client").$Enums.Status;
        rekeningTujuan: {
            namaShelter: string;
            noWhatsapp: string;
        };
        termsAndConditions: string[];
    }>;
    static uploadBuktiResi({ donasiId, donaturId, buktiResiPath, }: UploadBuktiProps): Promise<{
        donasiId: string;
        status: import("@prisma/client").$Enums.Status;
        buktiResi: string;
        message: string;
    }>;
    static verifikasiDonasi({ userId, donasiId, statusBaru, alasanDitolak, }: VerifikasiDonasiProps): Promise<{
        donasiId: string;
        nominal: number;
        statusBaru: import("@prisma/client").$Enums.Status;
        alasanDitolak: string | null;
        diverifikasiAt: Date | null;
    }>;
    static getRiwayat({ role, userId, shelterId }: GetRiwayatProps): Promise<({
        shelter: {
            id: string;
            namaShelter: string;
        };
        satwa: {
            id: string;
            nama: string;
            foto: string | null;
        } | null;
        donatur: {
            id: string;
            email: string;
            namaLengkap: string;
        };
    } & {
        id: string;
        shelterId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: import("@prisma/client").$Enums.Status;
        donaturId: string;
        nominal: number;
        satwaId: string | null;
        buktiResi: string;
        catatan: string | null;
        alasanDitolak: string | null;
        diverifikasiAt: Date | null;
    })[]>;
    static deleteDonasi(userId: string, role: string, donasiId: string): Promise<{
        id: string;
        shelterId: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        status: import("@prisma/client").$Enums.Status;
        donaturId: string;
        nominal: number;
        satwaId: string | null;
        buktiResi: string;
        catatan: string | null;
        alasanDitolak: string | null;
        diverifikasiAt: Date | null;
    }>;
    static getById(donasiId: string): Promise<{
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
            status: import("@prisma/client").$Enums.Status;
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
            status: import("@prisma/client").$Enums.StatusSatwa;
            nama: string;
            jenis: import("@prisma/client").$Enums.JenisSatwa;
            ras: string | null;
            umur: number;
            kelamin: import("@prisma/client").$Enums.KelaminSatwa;
            foto: string | null;
            danaTerkumpul: number;
        } | null;
        donatur: {
            id: string;
            email: string;
            role: import("@prisma/client").$Enums.Role;
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
        status: import("@prisma/client").$Enums.Status;
        donaturId: string;
        nominal: number;
        satwaId: string | null;
        buktiResi: string;
        catatan: string | null;
        alasanDitolak: string | null;
        diverifikasiAt: Date | null;
    }>;
}
export {};
//# sourceMappingURL=donasi.service.d.ts.map