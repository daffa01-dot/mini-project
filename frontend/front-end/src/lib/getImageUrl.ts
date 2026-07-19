export function getImageUrl(path?: string | null) {
  if (!path) return "/placeholder-animal.jpg";

  // Sudah URL lengkap
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
  const baseUrl = apiUrl.replace("/api/v1", "");

  // Pastikan selalu diawali "/"
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}