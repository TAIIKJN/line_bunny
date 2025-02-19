import { Body, Controller, Get, Post, Response, Route } from "tsoa";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const token =
  "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";

interface OrderData {
  total: string;
  quantity: number;
  userId: string;
  orderDetail: OrderDetailData[];
}

interface OrderDetailData {
  total: string;
  quantity: number;
  state: string;
  productId: string;
  orderId?: string;
}

@Route("order")
export class orderController extends Controller {
  @Get()
  public async getOrderAll() {
    try {
      const orderData = await prisma.order.findFirst({
        include: {
          orderDetail: {
            include: {
              product: true,
            },
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
                    align: "center",
                    weight: "bold",
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
                    margin: "10px",
                    contents:
                      (orderData?.orderDetail ?? []).filter(
                        (data) => data.state === "pending"
                      ).length > 0
                        ? [
                            {
                              type: "text",
                              color: "#CC7722",
                              text: "⏳ Pending(รอดำเนินการ)",
                              offsetBottom: "2px",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: orderData?.orderDetail
                                .filter((data) => data.state === "pending")
                                .map((item) => [
                                  {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                      {
                                        type: "text",
                                        text: item.product.name,
                                        wrap: true,
                                      },
                                      {
                                        type: "box",
                                        layout: "horizontal",
                                        contents: [
                                          {
                                            type: "text",
                                            text: `x ${item.quantity}`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                          {
                                            type: "text",
                                            text: `${item.total} THB`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                        ],
                                      },
                                    ].flat(),
                                  },
                                ])
                                .flat(),
                            },
                          ]
                        : [],
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    margin: "10px",
                    contents:
                      (orderData?.orderDetail ?? []).filter(
                        (data) => data.state === "preparing"
                      ).length > 0
                        ? [
                            {
                              type: "text",
                              color: "#FF9F50",
                              text: "👨‍🍳 Preparing(กำลังเตรียม)",
                              offsetBottom: "2px",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: orderData?.orderDetail
                                .filter((data) => data.state === "preparing")
                                .map((item) => [
                                  {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                      {
                                        type: "text",
                                        text: item.product.name,
                                        wrap: true,
                                      },
                                      {
                                        type: "box",
                                        layout: "horizontal",
                                        contents: [
                                          {
                                            type: "text",
                                            text: `x ${item.quantity}`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                          {
                                            type: "text",
                                            text: `${item.total} THB`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                        ],
                                      },
                                    ].flat(),
                                  },
                                ])
                                .flat(),
                            },
                          ]
                        : [],
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    margin: "10px",
                    contents:
                      (orderData?.orderDetail ?? []).filter(
                        (data) => data.state === "readyToServe"
                      ).length > 0
                        ? [
                            {
                              type: "text",
                              color: "#008080",
                              text: "🛎️ Ready to Serve(พร้อมเสิร์ฟ)",
                              offsetBottom: "2px",
                            },
                            {
                              type: "box",
                              layout: "horizontal",
                              contents: orderData?.orderDetail
                                .filter((data) => data.state === "readyToServe")
                                .map((item) => [
                                  {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                      {
                                        type: "text",
                                        text: item.product.name,
                                        wrap: true,
                                      },
                                      {
                                        type: "box",
                                        layout: "horizontal",
                                        contents: [
                                          {
                                            type: "text",
                                            text: `x ${item.quantity}`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                          {
                                            type: "text",
                                            text: `${item.total} THB`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                        ],
                                      },
                                    ].flat(),
                                  },
                                ])
                                .flat(),
                            },
                          ]
                        : [],
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    margin: "10px",
                    contents:
                      (orderData?.orderDetail ?? []).filter(
                        (data) => data.state === "served"
                      ).length > 0
                        ? [
                            {
                              type: "text",
                              color: "#1E90FF",
                              text: "✔️ Served(เสิร์ฟแล้ว)",
                              offsetBottom: "2px",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: orderData?.orderDetail
                                .filter((data) => data.state === "served")
                                .map((item) => [
                                  {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                      {
                                        type: "text",
                                        text: item.product.name,
                                        wrap: true,
                                      },
                                      {
                                        type: "box",
                                        layout: "horizontal",
                                        contents: [
                                          {
                                            type: "text",
                                            text: `x ${item.quantity}`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                          {
                                            type: "text",
                                            text: `${item.total} THB`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                        ],
                                      },
                                    ].flat(),
                                  },
                                ])
                                .flat(),
                            },
                          ]
                        : [],
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    margin: "10px",
                    contents:
                      (orderData?.orderDetail ?? []).filter(
                        (data) => data.state === "canceled"
                      ).length > 0
                        ? [
                            {
                              type: "text",
                              color: "#E30B5C",
                              text: "❌ Canceled(ยกเลิก)",
                              offsetBottom: "2px",
                            },
                            {
                              type: "box",
                              layout: "horizontal",
                              contents: orderData?.orderDetail
                                .filter((data) => data.state === "canceled")
                                .map((item) => [
                                  {
                                    type: "box",
                                    layout: "vertical",
                                    contents: [
                                      {
                                        type: "text",
                                        text: item.product.name,
                                        wrap: true,
                                      },
                                      {
                                        type: "box",
                                        layout: "horizontal",
                                        contents: [
                                          {
                                            type: "text",
                                            text: `x ${item.quantity}`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                          {
                                            type: "text",
                                            text: `${item.total} THB`,
                                            color: "#C0C0C0",
                                            align: "end",
                                          },
                                        ],
                                      },
                                    ].flat(),
                                  },
                                ])
                                .flat(),
                            },
                          ]
                        : [],
                  },
                ],
              },
              footer: {
                type: "box",
                layout: "vertical",
                margin: "10px",
                contents: [
                  {
                    type: "text",
                    text: " ------------------------------ ",
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
                        align: "start",
                      },
                      {
                        type: "text",
                        size: "sm",
                        text: `${orderData?.quantity} items`,
                        align: "end",
                      },
                    ],
                  },
                  {
                    type: "box",
                    layout: "horizontal",
                    margin: "10px",
                    contents: [
                      {
                        type: "text",
                        size: "sm",
                        text: "💰 Total",
                        align: "start",
                      },
                      {
                        type: "text",
                        size: "sm",
                        text: `${orderData?.total} THB`,
                        align: "end",
                      },
                    ],
                  },
                  {
                    type: "text",
                    text: " ------------------------------ ",
                    align: "center",
                    offsetBottom: "2px",
                  },
                  {
                    type: "text",
                    text: "🙏 Thank you for your order",
                    offsetBottom: "2px",
                    wrap: true,
                  },
                  {
                    type: "text",
                    text: "😊 We hope to serve you again soon.",
                    offsetBottom: "2px",
                    wrap: true,
                  },
                  {
                    type: "text",
                    text: "🍰 Enjoy your food and drinks",
                    offsetBottom: "2px",
                    wrap: true,
                  },
                ],
              },
            },
          },
        ],
      };

      console.log(JSON.stringify(data));

      const data_massage = await axios.post(
        "https://api.line.me/v2/bot/message/push",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Message sent successfully:", data_massage.data);
      return "Message sent successfully!";
    } catch (error) {
      console.error("Error sending message:", error);
      return "Failed to send message.";
    }
  }

  @Get("{id}")
  public async getOrderById() {
    return "hiiii get by ID";
  }
  @Post()
  public async createOrder(@Body() req: OrderData) {
    try {
      const dataOrder = await prisma.order.create({
        data: {
          total: req.total,
          quantity: req.quantity,
          userId: req.userId,
        },
      });

      const dataDetail = await req.orderDetail.map((item) => {
        return {
          ...item,
          orderId: dataOrder.id,
        };
      });

      const dataOrderDetail = await prisma.orderDetail.createMany({
        // prisma.orderDetail.createManyAndReturn
        data: dataDetail,
      });

      return {
        dataOrder,
        dataOrderDetail,
      };
    } catch (error) {
      return error;
    }
  }
}
