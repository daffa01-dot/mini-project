export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  namaLengkap: string;
  email: string;
  password: string;
  role: "DONATUR" | "SHELTER";
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}