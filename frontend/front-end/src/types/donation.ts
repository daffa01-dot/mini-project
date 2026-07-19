export type DonationStatus = "MENUNGGU" | "DIVERIFIKASI" | "DITOLAK";

export interface Donation {
  id: string;
  nominal: number;
  status: DonationStatus;
  buktiResi?: string;
  catatan?: string;
  alasanDitolak?: string;
  diverifikasiAt?: string;
  createdAt: string;

  satwa?: {
    id: string;
    nama: string;
    foto?: string;
  };

  shelter?: {
    id: string;
    namaShelter: string;
  };

  donatur?: {
    id: string;
    namaLengkap: string;
    email: string;
  };
}

export interface CheckoutPayload {
  nominal: number;
  catatan?: string;
  satwaId?: string;
  shelterId?: string;
}

export interface VerifyDonationPayload {
  statusBaru: "DIVERIFIKASI" | "DITOLAK";
  alasanDitolak?: string;
}
export interface CheckoutResponse {
  donasiId: string;

  nominal: number;

  status: string;

  rekeningTujuan: {
    namaShelter: string;
    noWhatsapp: string;
  };

  termsAndConditions: string[];
}
