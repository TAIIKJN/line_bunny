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
exports.productController = void 0;
const tsoa_1 = require("tsoa");
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const token = "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";
let productController = class productController extends tsoa_1.Controller {
    getProductAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataProduct = yield prisma.categories.findMany({
                    include: {
                        product: true
                    }
                });
                const data = {
                    to: "Uaf85ed5e769f298f7255a8f0f6f9ae6a",
                    messages: [
                        {
                            type: "flex",
                            altText: "🏷 Product for you 🍞",
                            contents: {
                                type: "carousel",
                                contents: dataProduct.filter((status) => status.product.length > 0)
                                    .map((item) => ([
                                    {
                                        type: "bubble",
                                        header: {
                                            type: "box",
                                            layout: "vertical",
                                            contents: [
                                                {
                                                    type: "text",
                                                    text: `${item.type === 'Drink' ? '🍹' : '🍰'} ${item.name} `,
                                                    weight: "bold",
                                                    align: "center",
                                                },
                                            ]
                                        },
                                        body: {
                                            type: "box",
                                            layout: "vertical",
                                            contents: item.product.map((product) => ([
                                                {
                                                    type: "box",
                                                    layout: "horizontal",
                                                    margin: "10px",
                                                    contents: [
                                                        {
                                                            type: "image",
                                                            url: product.image,
                                                            size: "sm",
                                                            gravity: "center",
                                                            aspectMode: "cover",
                                                        },
                                                        {
                                                            type: "box",
                                                            layout: "vertical",
                                                            contents: [
                                                                {
                                                                    type: "text",
                                                                    text: product.name,
                                                                    wrap: true
                                                                },
                                                                {
                                                                    type: "text",
                                                                    text: product.description,
                                                                    wrap: true,
                                                                    color: "#C0C0C0",
                                                                },
                                                                {
                                                                    type: "text",
                                                                    text: `💰 Price ${product.price} THB`,
                                                                    wrap: true
                                                                },
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: "separator",
                                                    color: "#C0C0C0",
                                                    margin: "10px"
                                                }
                                            ])).flat()
                                        },
                                        footer: {
                                            type: "box",
                                            layout: "horizontal",
                                            contents: [
                                                {
                                                    type: "button",
                                                    style: "primary",
                                                    action: {
                                                        type: "postback",
                                                        label: "Order Food & Drinks",
                                                        data: "action=OrderFoodDrinks",
                                                        displayText: "Order Food & Drinks"
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                ])).flat()
                            }
                        },
                    ],
                };
                const data_massage = yield axios_1.default.post("https://api.line.me/v2/bot/message/push", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                console.log("Message sent successfully:", data_massage.data);
                return {
                    message: "Message sent successfully!",
                    dataProduct
                };
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
    createProduct(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield prisma.product.create({
                    data: Object.assign({}, req)
                });
                return data;
            }
            catch (error) {
                return error;
            }
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
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)())
], productController.prototype, "createProduct", null);
exports.productController = productController = __decorate([
    (0, tsoa_1.Route)("product")
], productController);
