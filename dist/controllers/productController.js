"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.productController = void 0;
const tsoa_1 = require("tsoa");
const axios_1 = __importDefault(require("axios"));
const token = "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";
let productController = class productController extends tsoa_1.Controller {
    getProductAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                to: "Uaf85ed5e769f298f7255a8f0f6f9ae6a",
                messages: [
                    {
                        type: "flex",
                        altText: "🏷 Order status for you 🍞",
                        contents: {
                            type: "bubble",
                            header: {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    {
                                        type: "text",
                                        text: "🏷 Order status for you 🍞"
                                    }
                                ]
                            },
                            body: {
                                type: "box",
                                layout: "vertical",
                                contents: [
                                    {
                                        type: "box",
                                        layout: "vertical",
                                        contents: [
                                            {
                                                type: "text",
                                                color: "#CC7722",
                                                text: "⏳ Pending(รอดำเนินการ)"
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "separator",
                                                        margin: "xxl",
                                                        color: "#9E9E9E"
                                                    },
                                                    {
                                                        type: "text",
                                                        text: "Matcha Green Tea Latte",
                                                        adjustMode: "shrink-to-fit",
                                                        offsetStart: "10px"
                                                    },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: "box",
                                        layout: "vertical",
                                        contents: [
                                            {
                                                type: "text",
                                                color: "#FF9F50",
                                                text: "👨‍🍳 Preparing(กำลังเตรียม)"
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "separator",
                                                        margin: "xxl",
                                                        color: "#9E9E9E"
                                                    },
                                                    {
                                                        type: "text",
                                                        text: "Classic Hot Cocoa",
                                                        adjustMode: "shrink-to-fit",
                                                        offsetStart: "10px"
                                                    },
                                                ]
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "separator",
                                                        margin: "xxl",
                                                        color: "#9E9E9E"
                                                    },
                                                    {
                                                        type: "text",
                                                        text: "Caramel Cocoa",
                                                        adjustMode: "shrink-to-fit",
                                                        offsetStart: "10px"
                                                    },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: "box",
                                        layout: "vertical",
                                        contents: [
                                            {
                                                type: "text",
                                                color: "#008080",
                                                text: "🛎️ Ready to Serve(พร้อมเสิร์ฟ)"
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "separator",
                                                        margin: "xxl",
                                                        color: "#9E9E9E"
                                                    },
                                                    {
                                                        type: "text",
                                                        text: "Chocolate Fudge Cake",
                                                        adjustMode: "shrink-to-fit",
                                                        offsetStart: "10px"
                                                    },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: "box",
                                        layout: "vertical",
                                        contents: [
                                            {
                                                type: "text",
                                                color: "#1E90FF",
                                                text: "✔️ Served(เสิร์ฟแล้ว)"
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "separator",
                                                        margin: "xxl",
                                                        color: "#9E9E9E"
                                                    },
                                                    {
                                                        type: "text",
                                                        text: "Red Velvet Cake",
                                                        adjustMode: "shrink-to-fit",
                                                        offsetStart: "10px"
                                                    },
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        type: "box",
                                        layout: "vertical",
                                        contents: [
                                            {
                                                type: "text",
                                                color: "#E30B5C",
                                                text: "❌ Canceled(ยกเลิก)"
                                            },
                                            {
                                                type: "box",
                                                layout: "horizontal",
                                                contents: [
                                                    {
                                                        type: "separator",
                                                        margin: "xxl",
                                                        color: "#9E9E9E"
                                                    },
                                                    {
                                                        type: "text",
                                                        text: "Banoffee Pie",
                                                        adjustMode: "shrink-to-fit",
                                                        offsetStart: "10px"
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                        }
                    },
                ],
            };
            try {
                const data_massage = yield axios_1.default.post("https://api.line.me/v2/bot/message/push", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                console.log("Message sent successfully:", data_massage.data);
                return "Message sent successfully!";
            }
            catch (error) {
                console.error("Error sending message:", error);
                return "Failed to send message.";
            }
        });
    }
    getProductById() {
        return __awaiter(this, void 0, void 0, function* () {
            return "hiiii get by ID";
        });
    }
};
exports.productController = productController;
__decorate([
    (0, tsoa_1.Get)()
], productController.prototype, "getProductAll", null);
__decorate([
    (0, tsoa_1.Get)("{id}")
], productController.prototype, "getProductById", null);
exports.productController = productController = __decorate([
    (0, tsoa_1.Route)("product")
], productController);
