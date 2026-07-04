import { PrismaClient, Role } from '@prisma/client'
import { BcryptUtil } from '../utils/bycrypt';
import {JWTUtil  } from '../utils/jwt'
import { ResponseError } from '../utils/response-error.util'
import { StatusCodes } from 'http-status-codes'
import {
  AuthLoginInput,
  AuthRegisterInput,
} from './auth.validation';
const prisma = new PrismaClient()

export class AuthService {
  // ============================================================
  // REGISTER
  // ============================================================
  static async register({ body }: { body: AuthRegisterInput }) {
    const {
      email, password, namaLengkap, noWhatsapp, role,
      namaShelter, deskripsi, kota, alamatLengkap,
      namaBank, atasNamaRekening, nomorRekening
    } = body

    // Cek email sudah terdaftar
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      throw new ResponseError(StatusCodes.CONFLICT, 'Email already registered')
    }

    const hashed = await bcrypt.hashPassword(password)

    // ── DONATUR ──────────────────────────────────────────────
    if (role === Role.DONATUR) {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashed,
          namaLengkap,
          noWhatsapp,
          role: Role.DONATUR
        }
      })

      const { password: _, ...safeUser } = user
      return safeUser
    }

    // ── ADMIN ─────────────────────────────────────────────────
    if (role === Role.ADMIN) {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashed,
          namaLengkap,
          role: Role.ADMIN
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
            noWhatsapp,
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
      include: { shelter: true }
    })

    // Cek user ada atau tidak
    if (!user) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, 'Email or password is incorrect')
    }

    // Cek password
    const isValid = await comparePassword(password, user.password)
    if (!isValid) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, 'Email or password is incorrect')
    }

    // Generate token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    })

    const { password: _, ...safeUser } = user
    return { safeUser, token }
  }
}