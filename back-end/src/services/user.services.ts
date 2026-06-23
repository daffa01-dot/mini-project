import { prisma } from "../configs/prisma.-client-config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const JWT_SECRET = process.env.JWT_SECRET || "secret_super_aman";

export class UserService {
  async register(payload: {
    email: any;
    password: any;
    role: any;
    fullName: any;
    phoneNumber: any;
  }) {
    const { email, password, role, fullName, phoneNumber } = payload;

    const newUser = await prisma.user.create({
      data: { email, password, role },
    });

    if (role === "donatur" || role === "DONATUR") {
      const newDonatur = await prisma.donatur.create({
        data: {
          userId: newUser.id,
          fullName: fullName,
          phoneNumber: phoneNumber,
        },
      });
      return { user: newUser, profile: newDonatur };
    }

    return { user: newUser, profile: null };
  }

  async login(payload: { usernameOrEmail: any; password: any }) {
    const usernameOrEmail = payload?.usernameOrEmail || "";
    const password = payload?.password || "";

    if (!usernameOrEmail || !password) {
      throw new Error("Email dan password wajib diisi di Postman!");
    }

    const user = await prisma.user.findUnique({
      where: { email: usernameOrEmail },
    });

    if (!user || user.password !== password) {
      throw new Error("Email atau password salah!");
    }

    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}

export const userService = new UserService();
