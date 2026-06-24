import { prisma } from "../configs/prisma.-client-config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const JWT_SECRET = process.env.JWT_SECRET || "secret_super_aman";

export class UserService {
  async register(payload: { email: any; password: any; role: any; fullName: any; phoneNumber: any; address?: any }) {
    const { email, password, role, fullName, phoneNumber, address } = payload;

    if (!email || !password || !role) {
      throw new Error("Email, password, dan role wajib diisi!");
    }

    // 1. Tulis data ke tabel user menggunakan prisma utama
    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        // PERBAIKAN DI SINI: Ubah teks menjadi HURUF BESAR SEMUA (.toUpperCase()) 
        // agar cocok dengan tipe data Enum Role di schema.prisma
        role: role.toUpperCase() 
      }
    });

    // 2. Jika perannya donatur, tulis data ke profil donatur secara mandiri
    // Pastikan pengecekan string tetap aman menggunakan .toLowerCase() atau .toUpperCase()
    if (role.toLowerCase() === 'donatur') {
      const newDonatur = await prisma.donatur.create({
        data: {
          userId: newUser.id, // Ambil ID yang sukses terbit dari proses 1
          fullName: fullName || "Belum ada nama",
          phoneNumber: phoneNumber || "",
          address: address || ""
        }
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
