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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const tsoa_1 = require("tsoa");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const token = "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";
let orderController = class orderController extends tsoa_1.Controller {
    getOrderAll() {
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
                const orderData = yield prisma.order.findFirst({
                    include: {
                        orderDetail: true
                    },
                    orderBy: {
                        createDate: "desc"
                    }
                });
                return orderData;
                //   const data_massage = await axios.post(
                //   "https://api.line.me/v2/bot/message/push",
                //   data,
                //   {
                //     headers: {
                //       Authorization: `Bearer ${token}`,
                //       "Content-Type": "application/json",
                //     },
                //   }
                // );  
                // console.log("Message sent successfully:", data_massage.data);
                // return "Message sent successfully!";
            }
            catch (error) {
                console.error("Error sending message:", error);
                return "Failed to send message.";
            }
        });
    }
    getOrderById() {
        return __awaiter(this, void 0, void 0, function* () {
            return "hiiii get by ID";
        });
    }
    createOrder(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dataOrder = yield prisma.order.create({
                    data: {
                        total: req.total,
                        quantity: req.quantity
                    }
                });
                const dataDetail = yield req.orderDetail.map((item) => {
                    return Object.assign(Object.assign({}, item), { orderId: dataOrder.id });
                });
                const dataOrderDetail = yield prisma.orderDetail.createManyAndReturn({
                    data: dataDetail
                });
                return {
                    dataOrder,
                    dataOrderDetail
                };
            }
            catch (error) {
                return error;
            }
        });
    }
};
exports.orderController = orderController;
__decorate([
    (0, tsoa_1.Get)()
], orderController.prototype, "getOrderAll", null);
__decorate([
    (0, tsoa_1.Get)("{id}")
], orderController.prototype, "getOrderById", null);
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, tsoa_1.Body)())
], orderController.prototype, "createOrder", null);
exports.orderController = orderController = __decorate([
    (0, tsoa_1.Route)("order")
], orderController);
