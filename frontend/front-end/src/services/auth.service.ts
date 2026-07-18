import api from "@/lib/axios";

/* =========================================================
   TYPES
========================================================= */

export interface RegisterPayload {
  namaLengkap: string;
  email: string;
  password: string;

  role: "DONATUR" | "SHELTER";

  namaShelter?: string;
  noWhatsapp?: string;
  kota?: string;
  alamatLengkap?: string;
  deskripsi?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

/* =========================================================
   AUTH
========================================================= */

/**
 * Register Donatur
 * Endpoint:
 * POST /api/v1/auth/register-donatur
 */
export const registerDonatur = async (
  payload: RegisterPayload
) => {
  const { data } = await api.post(
    "/auth/register-donatur",
    {
      namaLengkap: payload.namaLengkap,
      email: payload.email,
      password: payload.password,
    }
  );

  return data;
};

/**
 * Register Shelter
 * Endpoint:
 * POST /api/v1/auth/register-shelter
 */
export const registerShelter = async (
  payload: RegisterPayload
) => {
  const { data } = await api.post(
    "/auth/register-shelter",
    payload
  );

  return data;
};

/**
 * Login
 * Endpoint:
 * POST /api/v1/auth/login
 */
export const login = async (
  payload: LoginPayload
) => {
  const { data } = await api.post(
    "/auth/login",
    payload
  );

  return data;
};

/**
 * Logout
 * Endpoint:
 * POST /api/v1/auth/logout
 */
export const logout = async () => {
  const { data } = await api.post(
    "/auth/logout"
  );

  return data;
};

/**
 * Profile Donatur
 * Endpoint:
 * GET /api/v1/auth/profile-donatur
 */
export const getProfileDonatur = async () => {
  const { data } = await api.get(
    "/auth/profile-donatur"
  );

  return data;
};
export const me = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};