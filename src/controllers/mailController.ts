import { PrismaClient } from "@prisma/client";
import axios from "axios";
import nodemailer from "nodemailer";
import { Body, Controller, Get, Post, Response, Route } from "tsoa";

const prisma = new PrismaClient();

interface sentEmail {
  email: string;
}

@Route("mail")
export class mailController extends Controller {
  @Get()
  @Response(200, "Webhook received successfully")
  public async getUser() {
    try {
      const data = await prisma.user.findMany();
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Error fetching users");
    }
  }

  @Post()
  public async sendOtp(@Body() body: sentEmail) {
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
      const fromData = nodemailer.createTransport({
        host: "localhost",
        port: 1025,
        secure: false,
        logger: true, // เพิ่มตัวนี้เพื่อบันทึกการเชื่อมต่อ
        socketTimeout: 10000,
      });
      const dataSendOtp = await fromData.sendMail({
        from: "no-reply@yourdomain.com",
        to: "taii.kanjana@gmail.com",
        subject: "Your OTP Code",
        text: `Your OTP Code ${otp}`,
      });
      return dataSendOtp;
    } catch (e) {
      console.error("Error sending email:", e);
      throw new Error("Error sending OTP email");
    }
  }
}
