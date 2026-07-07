import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client'; // 1. UBAH KE DEFAULT PACKAGE (Menghilangkan error runtime-utils)
import pg from 'pg'; 

const connectionString = `${process.env.DATABASE_URL}`;

// Konfigurasi adapter PostgreSQL murni untuk Prisma v6
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// 2. GUNAKAN EXPORT DEFAULT agar seragam dan aman di semua file service
export default prisma;