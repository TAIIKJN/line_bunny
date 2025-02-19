"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailController = void 0;
const client_1 = require("@prisma/client");
const nodemailer_1 = __importDefault(require("nodemailer"));
const tsoa_1 = require("tsoa");
const prisma = new client_1.PrismaClient();
let mailController = class mailController extends tsoa_1.Controller {
    getUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield prisma.user.findMany();
                return data;
            }
            catch (error) {
                console.error("Error fetching users:", error);
                throw new Error("Error fetching users");
            }
        });
    }
    sendOtp(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const otp = Math.floor(100000 + Math.random() * 900000);
            try {
                const fromData = nodemailer_1.default.createTransport({
                    host: "localhost",
                    port: 1025,
                    secure: false,
                    logger: true, // เพิ่มตัวนี้เพื่อบันทึกการเชื่อมต่อ
                    socketTimeout: 10000,
                });
                const dataSendOtp = yield fromData.sendMail({
                    from: "no-reply@yourdomain.com",
                    to: "taii.kanjana@gmail.com",
                    subject: "Your OTP Code",
                    text: `Your OTP Code ${otp}`,
                });
                return dataSendOtp;
            }
            catch (e) {
                console.error("Error sending email:", e);
                throw new Error("Error sending OTP email");
            }
        });
    }
};
exports.mailController = mailController;
__decorate([
    (0, tsoa_1.Get)(),
    (0, tsoa_1.Response)(200, "Webhook received successfully")
], mailController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)())
], mailController.prototype, "sendOtp", null);
exports.mailController = mailController = __decorate([
    (0, tsoa_1.Route)("mail")
], mailController);
