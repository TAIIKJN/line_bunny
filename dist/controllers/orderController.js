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
exports.orderController = void 0;
const tsoa_1 = require("tsoa");
const axios_1 = __importDefault(require("axios"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const token = "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";
let orderController = class orderController extends tsoa_1.Controller {
    getOrderAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orderData = yield prisma.order.findFirst({
                    include: {
                        orderDetail: {
                            include: {
                                product: true
                            }
                        },
                    },
                    orderBy: {
                        createDate: "desc",
                    },
                });
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
                                            text: "🏷 Order status for you 🍞",
                                            align: "center"
                                        },
                                    ],
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
                                                    text: "⏳ Pending(รอดำเนินการ)",
                                                    offsetBottom: "2px"
                                                },
                                                {
                                                    type: "box",
                                                    layout: "vertical",
                                                    contents: orderData === null || orderData === void 0 ? void 0 : orderData.orderDetail.filter(data => data.state === 'pending').map(item => ([
                                                        {
                                                            type: "box",
                                                            layout: "horizontal",
                                                            contents: [
                                                                {
                                                                    type: "separator",
                                                                    margin: "xxl",
                                                                    color: "#9E9E9E",
                                                                },
                                                                {
                                                                    type: "text",
                                                                    text: item.product.name,
                                                                    adjustMode: "shrink-to-fit",
                                                                    offsetStart: "10px",
                                                                },
                                                            ].flat()
                                                        }
                                                    ])).flat()
                                                },
                                            ],
                                        },
                                        {
                                            type: "box",
                                            layout: "vertical",
                                            contents: [
                                                {
                                                    type: "text",
                                                    color: "#FF9F50",
                                                    text: "👨‍🍳 Preparing(กำลังเตรียม)",
                                                    offsetBottom: "2px"
                                                },
                                                {
                                                    type: "box",
                                                    layout: "vertical",
                                                    contents: orderData === null || orderData === void 0 ? void 0 : orderData.orderDetail.filter(data => data.state === 'preparing').map(item => ([
                                                        {
                                                            type: "box",
                                                            layout: "horizontal",
                                                            contents: [
                                                                {
                                                                    type: "separator",
                                                                    margin: "xxl",
                                                                    color: "#9E9E9E",
                                                                },
                                                                {
                                                                    type: "text",
                                                                    text: item.product.name,
                                                                    adjustMode: "shrink-to-fit",
                                                                    offsetStart: "10px",
                                                                },
                                                            ].flat()
                                                        }
                                                    ])).flat(),
                                                },
                                            ]
                                        },
                                        {
                                            type: "box",
                                            layout: "vertical",
                                            contents: [
                                                {
                                                    type: "text",
                                                    color: "#008080",
                                                    text: "🛎️ Ready to Serve(พร้อมเสิร์ฟ)",
                                                    offsetBottom: "2px",
                                                },
                                                {
                                                    type: "box",
                                                    layout: "horizontal",
                                                    contents: orderData === null || orderData === void 0 ? void 0 : orderData.orderDetail.filter(data => data.state === 'readyToServe').map(item => ([
                                                        {
                                                            type: "box",
                                                            layout: "horizontal",
                                                            contents: [
                                                                {
                                                                    type: "separator",
                                                                    margin: "xxl",
                                                                    color: "#9E9E9E",
                                                                },
                                                                {
                                                                    type: "text",
                                                                    text: item.product.name,
                                                                    adjustMode: "shrink-to-fit",
                                                                    offsetStart: "10px",
                                                                },
                                                            ].flat()
                                                        }
                                                    ])).flat()
                                                },
                                            ],
                                        },
                                        {
                                            type: "box",
                                            layout: "vertical",
                                            contents: [
                                                {
                                                    type: "text",
                                                    color: "#1E90FF",
                                                    text: "✔️ Served(เสิร์ฟแล้ว)",
                                                    offsetBottom: "2px",
                                                },
                                                {
                                                    type: "box",
                                                    layout: "vertical",
                                                    contents: orderData === null || orderData === void 0 ? void 0 : orderData.orderDetail.filter(data => data.state === 'served').map(item => ([
                                                        {
                                                            type: "box",
                                                            layout: "horizontal",
                                                            contents: [
                                                                {
                                                                    type: "separator",
                                                                    margin: "xxl",
                                                                    color: "#9E9E9E",
                                                                },
                                                                {
                                                                    type: "text",
                                                                    text: item.product.name,
                                                                    adjustMode: "shrink-to-fit",
                                                                    offsetStart: "10px",
                                                                },
                                                            ].flat()
                                                        }
                                                    ])).flat(),
                                                },
                                            ]
                                        },
                                        {
                                            type: "box",
                                            layout: "vertical",
                                            contents: [
                                                {
                                                    type: "text",
                                                    color: "#E30B5C",
                                                    text: "❌ Canceled(ยกเลิก)",
                                                    offsetBottom: "2px",
                                                },
                                            ]
                                        },
                                        {
                                            type: "box",
                                            layout: "horizontal",
                                            contents: orderData === null || orderData === void 0 ? void 0 : orderData.orderDetail.filter(data => data.state === 'canceled').map(item => ([
                                                {
                                                    type: "box",
                                                    layout: "horizontal",
                                                    contents: [
                                                        {
                                                            type: "separator",
                                                            margin: "xxl",
                                                            color: "#9E9E9E",
                                                        },
                                                        {
                                                            type: "text",
                                                            text: item.product.name,
                                                            adjustMode: "shrink-to-fit",
                                                            offsetStart: "10px",
                                                        },
                                                    ].flat()
                                                }
                                            ])).flat(),
                                        },
                                    ],
                                },
                                footer: {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                        {
                                            type: "text",
                                            text: "🍰 ------------------------------ 🍰",
                                            align: "center",
                                            offsetBottom: "2px",
                                        },
                                        {
                                            type: "box",
                                            layout: "horizontal",
                                            offsetBottom: "2px",
                                            contents: [
                                                {
                                                    type: "text",
                                                    size: "sm",
                                                    text: "Grand Total ",
                                                    align: "start"
                                                },
                                                {
                                                    type: "text",
                                                    size: "sm",
                                                    text: `${orderData === null || orderData === void 0 ? void 0 : orderData.quantity} items`,
                                                    align: "end"
                                                }
                                            ]
                                        },
                                        {
                                            type: "box",
                                            layout: "horizontal",
                                            offsetBottom: "2px",
                                            contents: [
                                                {
                                                    type: "text",
                                                    size: "sm",
                                                    text: "💰 Total",
                                                    align: "start"
                                                },
                                                {
                                                    type: "text",
                                                    size: "sm",
                                                    text: `${orderData === null || orderData === void 0 ? void 0 : orderData.total} THB`,
                                                    align: "end"
                                                }
                                            ]
                                        },
                                    ]
                                }
                            },
                        },
                    ],
                };
                console.log(JSON.stringify(data));
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
                        quantity: req.quantity,
                    },
                });
                const dataDetail = yield req.orderDetail.map((item) => {
                    return Object.assign(Object.assign({}, item), { orderId: dataOrder.id });
                });
                const dataOrderDetail = yield prisma.orderDetail.createManyAndReturn({
                    data: dataDetail,
                });
                return {
                    dataOrder,
                    dataOrderDetail,
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
