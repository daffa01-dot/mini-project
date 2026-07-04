import { prisma } from "../configs/prisma.-client-config";
import bcrypt from "bcrypt";
import { registerSchema } from "../utils/validation";
import { Role } from "@prisma/client";
export class UserService {
  // --- REGISTER METHOD ---
  async register(payload: any) {
    // 1. Zod Validation (replaces all your manual if-checks)
    const validatedData = registerSchema.parse(payload);
    const { email, password, role, fullName, phoneNumber, address } = validatedData;

    // 2. Email Check (database check)
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (existingUser) throw new Error("Email ini sudah terdaftar.");

    // 3. Password Hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create User
    const newUser = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        password: hashedPassword,
        role: role.toUpperCase() as Role,
      },
    });

    // 5. Profile Creation (Keep your original logic)
    if (role.toUpperCase() === 'DONATUR') {
      const newDonatur = await prisma.donatur.create({
        data: {
          userId: newUser.id,
          fullName: fullName || "Belum ada nama",
          phoneNumber: phoneNumber || "",
          address: address || ""
        }
      });
      return { user: newUser, profile: newDonatur };
    }

    return { user: newUser, profile: null };
  }

  // --- LOGIN METHOD ---
  async login(payload: { usernameOrEmail: any; password: any }) {
    const { usernameOrEmail, password } = payload;

    if (!usernameOrEmail || !password) {
      throw new Error("Email dan password wajib diisi!");
    }

    const user = await prisma.user.findUnique({
      where: { email: usernameOrEmail.toLowerCase() },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error("Email atau password salah!");
    }

    // Hide password before returning
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

export const userService = new UserService();