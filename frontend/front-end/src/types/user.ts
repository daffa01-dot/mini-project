export interface User {
  id: string;
  namaLengkap: string;
  email: string;
  noWhatsapp?: string;
  role: "DONATUR" | "SHELTER" | "SUPER_ADMIN";

  createdAt: string;
  updatedAt: string;
}