import { PrismaClient, Role } from "@prisma/client";
import { BcryptUtil } from "../utils/bycrypt"; 
import { JWTUtil } from "../utils/jwt";
import { ResponseError } from "../utils/response-error.util";
import { StatusCodes } from "http-status-codes";
import { AuthLoginInput, AuthRegisterInput } from "./auth.validation";

const prisma = new PrismaClient();

export class AuthService {
  static async register({ body }: { body: AuthRegisterInput }) {
    const {
      email,
      password,
      namaLengkap,
      noWhatsapp,
      role,
      namaShelter,
      deskripsi,
      kota,
      alamatLengkap,
      namaBank,
      atasNamaRekening,
      nomorRekening,
    } = body;

    const existing = await prisma.user.findUnique({
      where: { email: body.email },
    });

    if (existing) {
      throw new ResponseError(StatusCodes.CONFLICT, "Email already registered");
    }

    const hashed = await BcryptUtil.hashPassword(body.password);

    // ── DONATUR & ADMIN ──────────────────────────────────────────────
    if (role === Role.DONATUR || role === Role.SUPER_ADMIN) {
      const user = await prisma.user.create({
        data: {
          email,
          password: hashed,
          namaLengkap,
          noWhatsapp: noWhatsapp ?? null,
          role: role,
        },
      });

      const { password: _, ...safeUser } = user;
      return safeUser;
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
            role: Role.SHELTER,
          },
        });

        const shelter = await tx.shelter.create({
          data: {
            userId: user.id,
            namaShelter: namaShelter!,
            deskripsi: deskripsi!,
            kota: kota!,
            alamatLengkap: alamatLengkap!,
            noWhatsapp: noWhatsapp!,
            rekening: {
              create: {
                namaBank: namaBank!,
                atasNamaRekening: atasNamaRekening!,
                nomorRekening: nomorRekening!,
              },
            },
          },
          include: { rekening: true }
        });

        const { password: _, ...safeUser } = user;
        return { ...safeUser, shelter };
      });

      return result;
    }

    throw new ResponseError(StatusCodes.BAD_REQUEST, "Invalid role");
  }

  static async login({ body }: { body: AuthLoginInput }) {
    const { email, password } = body;

    const user = await prisma.user.findFirst({
      where: {
        email,
        deletedAt: null, 
      },
      include: {
        shelter: true,
      },
    });

    if (!user) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, "Email or password is incorrect");
    }

    const isValid = await BcryptUtil.comparePassword(password, user.password);
    if (!isValid) {
      throw new ResponseError(StatusCodes.UNAUTHORIZED, "Email or password is incorrect");
    }

    const shelterId = user.shelter?.id || null;

    // JWT Payload
    const token = JWTUtil.signToken({
      id: user.id,
      email: user.email,
      role: user.role,
      shelterId: shelterId,
    } as any);

    const { password: _, ...safeUser } = user;
    return { safeUser, token };
  }
}