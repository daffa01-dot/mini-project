import { PrismaClient, Role } from '@prisma/client'
import { BcryptUtil } from '../utils/bycrypt'
import { JWTUtil } from '../utils/jwt'
import { ResponseError } from '../utils/response-error.util'
import { StatusCodes } from 'http-status-codes'
import {
  AuthLoginInput,
  AuthRegisterInput,
} from './auth.validation';

const prisma = new PrismaClient()
const SALT_ROUNDS = 10;

export class AuthService {

  static async register({ body }: { body: AuthRegisterInput }) {
    const {
      email, password, namaLengkap, noWhatsapp, role,
      namaShelter, deskripsi, kota, alamatLengkap,
      namaBank, atasNamaRekening, nomorRekening
    } = body

    // Cek email sudah terdaftar
    const existing = await prisma.user.findUnique({
       where: { 
        email: body.email,
      },
     });
    if (existing) {
      throw new ResponseError(StatusCodes.CONFLICT, 'Email already registered')
    }

    const hashed = await BcryptUtil.hashPassword(body.password);

    // ── DONATUR ──────────────────────────────────────────────
    if (role === Role.DONATUR) {
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

    // ── ADMIN ─────────────────────────────────────────────────
    if (role === Role.SUPER_ADMIN) {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashed,
          namaLengkap,
          role: Role.SUPER_ADMIN
        }
      })

      const { password: _, ...safeUser } = user
      return safeUser
    }

    // ── SHELTER ───────────────────────────────────────────────
    if (role === Role.SHELTER) {
      const result = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            email,
            password: hashed,
            namaLengkap,
            noWhatsapp: noWhatsapp ?? null,
            role: Role.SHELTER
          }
        })

        const shelter = await tx.shelter.create({
          data: {
            userId: user.id,
            namaShelter: namaShelter!,
            deskripsi: deskripsi!,
            kota: kota!,
            alamatLengkap: alamatLengkap!,
            noWhatsapp: noWhatsapp!,
            namaBank: namaBank!,
            atasNamaRekening: atasNamaRekening!,
            nomorRekening: nomorRekening!
          }
        })

        const { password: _, ...safeUser } = user
        return { ...safeUser, shelter }
      })

      return result
    }

    throw new ResponseError(StatusCodes.BAD_REQUEST, 'Invalid role')
  }

  // ============================================================
  // LOGIN
  // ============================================================
  static async login({ body }: { body: AuthLoginInput }) {
    const { email, password } = body

    const user = await prisma.user.findUnique({
      where: { email },
      include: { shelter: true } // 🟢 Data shelter sudah ikut diambil di sini
    })

    // Cek user ada atau tidak
    if (!user) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, 'Email or password is incorrect')
    }

    const isValid = await BcryptUtil.comparePassword(password, user.password)
    if (!isValid) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, 'Email or password is incorrect')
    }

    // 🟢 PERBAIKAN UTAMA: Ambil id shelter dari data relasi (jika user adalah SHELTER)
   const shelterId = user.shelter?.id || null;
    // 🟢 PERBAIKAN: Masukkan shelterId ke dalam payload JWT Token
   const token = JWTUtil.signToken({
      id: user.id,
      email: user.email,
      role: user.role,
      shelterId: shelterId // 🟢 Kirim variabel murni, bukan tipe data 'string | null'
    } as any);
    const { password: _, ...safeUser } = user
    return { safeUser, token }
  }
}