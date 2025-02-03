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
exports.webhookController = void 0;
const client_1 = require("@prisma/client");
const axios_1 = __importDefault(require("axios"));
const tsoa_1 = require("tsoa");
const token = "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";
const prisma = new client_1.PrismaClient();
let webhookController = class webhookController extends tsoa_1.Controller {
    receiveWebhook(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!payload || !payload.events || !Array.isArray(payload.events)) {
                    this.setStatus(400);
                    return { message: "Invalid payload structure" };
                }
                console.log("Received Webhook:", payload);
                // ตรวจสอบว่ามี events อย่างน้อยหนึ่งรายการ
                if (payload.events.length > 0) {
                    console.log("Event Source:", (_a = payload.events[0]) === null || _a === void 0 ? void 0 : _a.source);
                    const dataUserLine = yield axios_1.default.get(`https://api.line.me/v2/bot/profile/${payload.events[0].source.userId}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });
                    if (dataUserLine) {
                        const dataUser = yield prisma.user.findFirst({
                            where: {
                                userId: dataUserLine.data.userId
                            }
                        });
                        if (!dataUser) {
                            yield prisma.user.create({
                                data: {
                                    userId: dataUserLine.data.userId,
                                    name: dataUserLine.data.displayName
                                }
                            });
                        }
                        else {
                            yield prisma.user.update({
                                data: {
                                    name: dataUserLine.data.displayName
                                },
                                where: {
                                    id: dataUser.id,
                                    userId: dataUserLine.data.userId
                                }
                            });
                        }
                    }
                }
                // หากต้องการตอบกลับจากการรับ webhook
                this.setStatus(200); // ตอบกลับด้วย HTTP 200
                return { message: "Webhook received successfully" };
            }
            catch (error) {
                console.error("Error processing webhook:", error);
                this.setStatus(500);
                return { message: "Internal Server Error" };
            }
        });
    }
    getProfile() {
        return __awaiter(this, void 0, void 0, function* () {
            const data_massage = yield axios_1.default.get(`https://api.line.me/v2/bot/profile/Uaf85ed5e769f298f7255a8f0f6f9ae6a`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            console.log("data_massage", data_massage);
        });
    }
};
exports.webhookController = webhookController;
__decorate([
    (0, tsoa_1.Post)(),
    (0, tsoa_1.Response)(200, "Webhook received successfully"),
    __param(0, (0, tsoa_1.Body)())
], webhookController.prototype, "receiveWebhook", null);
__decorate([
    (0, tsoa_1.Get)()
], webhookController.prototype, "getProfile", null);
exports.webhookController = webhookController = __decorate([
    (0, tsoa_1.Route)("webhook")
], webhookController);
