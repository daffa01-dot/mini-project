import * as zod from 'zod'
import { Role } from '@prisma/client'

export class AuthValidation {
  // ============================================================
  // REGISTER — 1 schema untuk semua role
  // ============================================================
  static readonly REGISTER = zod.object({
    body: zod.object({
      email: zod
        .string()
        .min(1, 'Email is required field')
        .email('Email format is invalid')
        .transform((email) => email.trim().toLocaleLowerCase()),

      password: zod
        .string()
        .min(1, 'Password is required field')
        .min(6, 'Password must be at least 6 characters'),

      namaLengkap: zod
        .string()
        .min(1, 'Full name is required field')
        .max(100, 'Full name must be max 100 characters'),

      noWhatsapp: zod
        .string()
        .min(10, 'WhatsApp number minimum 10 digits')
        .max(15, 'WhatsApp number maximum 15 digits')
        .regex(/^[0-9]+$/, 'WhatsApp number must be numeric')
        .optional(),

      role: zod.enum([Role.ADMIN, Role.SHELTER, Role.DONATUR], {
        required_error: 'Role is required',
        invalid_type_error: 'Role must be ADMIN, SHELTER, or DONATUR'
      }),

      // Data Shelter — opsional, wajib kalau role SHELTER
      namaShelter: zod.string().min(3).optional(),
      deskripsi: zod.string().min(10).optional(),
      kota: zod.string().optional(),
      alamatLengkap: zod.string().min(10).optional(),
      namaBank: zod.string().optional(),
      atasNamaRekening: zod.string().optional(),
      nomorRekening: zod
        .string()
        .regex(/^[0-9]+$/, 'Account number must be numeric')
        .optional()

    }).refine((data) => {
      // Kalau role SHELTER, semua field shelter wajib ada
      if (data.role === Role.SHELTER) {
        return !!(
          data.namaShelter &&
          data.deskripsi &&
          data.kota &&
          data.alamatLengkap &&
          data.noWhatsapp &&
          data.namaBank &&
          data.atasNamaRekening &&
          data.nomorRekening
        )
      }
      return true
    }, { message: 'All shelter data is required when role is SHELTER' })
  })

  // ============================================================
  // LOGIN — 1 schema untuk semua role
  // ============================================================
  static readonly LOGIN = zod.object({
    body: zod.object({
      email: zod
        .string()
        .min(1, 'Email is required field')
        .email('Email format is invalid')
        .transform((email) => email.trim().toLocaleLowerCase()),

      password: zod
        .string()
        .min(1, 'Password is required field')
    })
  })
}

// Type exports
export type AuthRegisterInput = zod.infer<typeof AuthValidation.REGISTER>['body']
export type AuthLoginInput = zod.infer<typeof AuthValidation.LOGIN>['body']