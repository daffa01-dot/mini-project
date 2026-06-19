import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  // Tentukan path ke file schema Anda
  schema: "prisma/schema.prisma", 
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts", // Opsional, sesuaikan skrip seed Anda
  },
  datasource: {
    // CLI menggunakan URL ini untuk menjalankan migrasi & studio
    url: env("DATABASE_URL"), 
  },
});
