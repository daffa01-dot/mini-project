import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "saiddaffa123@gmail.com",                  // Isi langsung di sini
    pass: "lsbiyetzhswfmeny"                          // Isi langsung rapat tanpa spasi
  },
});

export default transporter;