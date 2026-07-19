import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "saiddaffa123@gmail.com",                  
    pass: "lsbiyetzhswfmeny"                          
  },
});

export default transporter;