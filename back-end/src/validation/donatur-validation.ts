import * as zod from "zod";

export class DonaturValidation {
  static readonly REGISTER = zod.object({
    body: zod.object({
      email: zod.string().min(1, "Email is required field").email(),
      password: zod.string().min(1, "Password is required field").min(6),
      namaLengkap: zod.string().min(1, "Full name is required field"),
      noWhatsapp: zod.string().optional(),
    }),
  });

  static readonly LOGIN = zod.object({
    body: zod.object({
      email: zod.string().min(1, "Email is required field").email(),
      password: zod.string().min(1, "Password is required field"),
    }),
  });
}
