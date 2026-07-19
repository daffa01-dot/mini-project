import api from "@/lib/axios";
import type { CheckoutPayload, VerifyDonationPayload } from "@/types/donation";

// Checkout Donasi
export const checkoutDonation = async (payload: CheckoutPayload) => {
  const { data } = await api.post("/donasi/checkout", payload);

  return data.data;
};

// Upload Bukti Transfer
export const uploadReceipt = async (donationId: string, formData: FormData) => {
  const { data } = await api.patch(
    `/donasi/${donationId}/upload-bukti`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return data.data;
};

// Riwayat Donasi
export const getDonationHistory = async () => {
  const { data } = await api.get("/donasi/riwayat");
  

  return data.data;
};

// Detail Donasi
export const getDonationById = async (id: string) => {
  const { data } = await api.get(`/donasi/${id}`);

  return data.data;
};

// Verifikasi Donasi
export const verifyDonation = async (
  donationId: string,
  payload: {
    statusBaru: "DIVERIFIKASI" | "DITOLAK";
    alasanDitolak?: string;
  },
) => {
  const { data } = await api.patch(`/donasi/${donationId}/verifikasi`, payload);

  return data.data;
};
// Hapus Donasi
export const deleteDonation = async (donationId: string) => {
  const { data } = await api.delete(`/donasi/${donationId}`);

  return data.data;
};
