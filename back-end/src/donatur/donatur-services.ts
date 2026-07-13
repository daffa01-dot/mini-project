import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcrypt'
import { DonaturValidation } from '../validation/donatur-validation'
import { JWTUtil } from '../utils/jwt'
import { ResponseError } from '../utils/response-error.util'
import { StatusCodes } from 'http-status-codes'

const prisma = new PrismaClient()
const SALT_ROUNDS = 10

export class DonaturService {
  // Terima parameter berupa object { body }
  static async register({ body }: { body: any }) {
    
    // Validasi langsung menggunakan data { body } yang dikirim dari controller
    const validatedData = DonaturValidation.REGISTER.parse({ body });
    const { email, password, namaLengkap, noWhatsapp } = validatedData.body;

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      throw new ResponseError(StatusCodes.CONFLICT, 'Email already registered')
    }

    const hashed = await bcrypt.hash(password, SALT_ROUNDS)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashed,
        namaLengkap,
        noWhatsapp: noWhatsapp ?? null,
        role: Role.DONATUR
      }
    })

    const { password: _, ...safeUser } = user
    return safeUser
  }

  // Terapkan hal yang sama pada fungsi login
  static async login({ body }: { body: any }) {
    const validatedData = DonaturValidation.LOGIN.parse({ body });
    const { email, password } = validatedData.body;

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || user.role !== Role.DONATUR) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, 'Email or password is incorrect')
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, 'Email or password is incorrect')
    }

    const token = JWTUtil.signToken({ id: user.id, email: user.email, role: user.role })
    const { password: _, ...safeUser } = user
    return { safeUser, token }
  }

  static async getProfile(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        namaLengkap: true,
        noWhatsapp: true,
        role: true,
        createdAt: true
      }
    })

    if (!user) {
      throw new ResponseError(StatusCodes.NOT_FOUND, 'Donatur profile not found')
    }

    return user
  }
  static async getStats(userId: string) {
  // Menghitung statistik donasi user berdasarkan donaturId
  const stats = await prisma.donasi.aggregate({
    where: { 
      donaturId: userId,
      status: "DIVERIFIKASI" // Hanya hitung yang sudah diverifikasi agar akurat
    },
    _sum: { nominal: true },
    _count: { id: true },
  });

  return {
    totalNominal: stats._sum.nominal || 0,
    totalTransaksi: stats._count.id || 0
  };
}
}
