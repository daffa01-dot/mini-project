export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterDonaturPayload {
  namaLengkap: string;
  email: string;
  password: string;
  noWhatsapp?: string;
}

export interface RegisterShelterPayload {
  namaLengkap: string;
  email: string;
  password: string;
  noWhatsapp: string;

  namaShelter: string;
  kota: string;
  alamatLengkap: string;
  deskripsi: string;

  namaBank: string;
  nomorRekening: string;
  atasNamaRekening: string;
}

export interface User {
  id: string;
  namaLengkap: string;
  email: string;
  role: "DONATUR" | "SHELTER" | "SUPER_ADMIN";
}

export interface LoginResponse {
  success: boolean;
  message: string;

  data: {
    token: string;
    user: User;
  };
}