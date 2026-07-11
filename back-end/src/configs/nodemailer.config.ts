import nodemailer from "nodemailer";
import 'dotenv/config';

// LEGACY: hardcoded transporter kept for reference (DO NOT COMMIT real creds)
export const legacyTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "saiddaffa123@gmail.com", // OLD: kept for reference
    pass: "lsbiyetzhswfmeny", // OLD: kept for reference
  },
});

// NEW: Recommended transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST || "smtp.gmail.com",
  port: Number(process.env.NODEMAILER_PORT || 465),
  secure: process.env.NODEMAILER_SECURE ? process.env.NODEMAILER_SECURE === 'true' : true,
  auth: {
    user: process.env.NODEMAILER_GOOGLE_APP_USER_EMAIL,
    pass: process.env.NODEMAILER_GOOGLE_APP_PASSWORD,
  },
});

export default transporter;