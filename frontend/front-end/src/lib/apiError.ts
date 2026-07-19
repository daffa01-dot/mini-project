import { AxiosError } from "axios";

export function getApiErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    return (
      error.response?.data?.message ??
      "Terjadi kesalahan pada server."
    );
  }

  return "Terjadi kesalahan yang tidak diketahui.";
}