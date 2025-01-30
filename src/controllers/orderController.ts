import { Body, Controller, Get, Post, Response, Route } from "tsoa";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const token =
  "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";

interface OrderData{
  total:string;
  quantity:number;
  orderDetail:OrderDetailData[];
}

interface OrderDetailData{
  total:string;
  quantity:number;
  state:string;
  productId:string;
  orderId?:string;
}

@Route("order")
export class orderController extends Controller {
  @Get()
  public async getOrderAll() {
    try{
    const orderData = await prisma.order.findFirst({
      include:{
        orderDetail:true
      },
      orderBy:{
        createDate:"desc"
      }
    })

    const data = {
      to: "Uaf85ed5e769f298f7255a8f0f6f9ae6a",
      messages: [
        {
          type: "flex",
          altText:"🏷 Order status for you 🍞",
          contents:{
            type: "bubble",
            header:{
              type:"box",
              layout:"vertical",
              contents:[
                {
                  type:"text",
                  text:"🏷 Order status for you 🍞"
                }
              ]
            },
            body:{
              type:"box",
              layout:"vertical",
              contents:[
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type:"text",
                      color:"#CC7722",
                      text:"⏳ Pending(รอดำเนินการ)"
                    },
                    {
                      type:"box",
                      layout:"horizontal",
                      contents:[
                        {
                          type: "separator",
                          margin:"xxl",
                          color: "#9E9E9E"
                        },
                        {
                          type:"text",
                          text:"Matcha Green Tea Latte",
                          adjustMode:"shrink-to-fit",
                          offsetStart:"10px"
                        },
                      ]
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents:[
                    {
                      type:"text",
                      color:"#FF9F50",
                      text:"👨‍🍳 Preparing(กำลังเตรียม)"
                    },
                    {
                      type:"box",
                      layout:"horizontal",
                      contents:[
                        {
                          type: "separator",
                          margin:"xxl",
                          color: "#9E9E9E"
                        },
                        {
                          type:"text",
                          text:"Classic Hot Cocoa",
                          adjustMode:"shrink-to-fit",
                          offsetStart:"10px"
                        },
                      ]
                    },
                    {
                      type:"box",
                      layout:"horizontal",
                      contents:[
                        {
                          type: "separator",
                          margin:"xxl",
                          color: "#9E9E9E"
                        },
                        {
                          type:"text",
                          text:"Caramel Cocoa",
                          adjustMode:"shrink-to-fit",
                          offsetStart:"10px"
                        },
                      ]
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents:[
                    {
                      type:"text",
                      color:"#008080",
                      text:"🛎️ Ready to Serve(พร้อมเสิร์ฟ)"
                    },
                    {
                      type:"box",
                      layout:"horizontal",
                      contents:[
                        {
                          type: "separator",
                          margin:"xxl",
                          color: "#9E9E9E"
                        },
                        {
                          type:"text",
                          text:"Chocolate Fudge Cake",
                          adjustMode:"shrink-to-fit",
                          offsetStart:"10px"
                        },
                      ]
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents:[
                    {
                      type:"text",
                      color:"#1E90FF",
                      text:"✔️ Served(เสิร์ฟแล้ว)"
                    },
                    {
                      type:"box",
                      layout:"horizontal",
                      contents:[
                        {
                          type: "separator",
                          margin:"xxl",
                          color: "#9E9E9E"
                        },
                        {
                          type:"text",
                          text:"Red Velvet Cake",
                          adjustMode:"shrink-to-fit",
                          offsetStart:"10px"
                        },
                      ]
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents:[
                    {
                      type:"text",
                      color:"#E30B5C",
                      text:"❌ Canceled(ยกเลิก)"
                    },
                    {
                      type:"box",
                      layout:"horizontal",
                      contents:[
                        {
                          type: "separator",
                          margin:"xxl",
                          color: "#9E9E9E"
                        },
                        {
                          type:"text",
                          text:"Banoffee Pie",
                          adjustMode:"shrink-to-fit",
                          offsetStart:"10px"
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

    return orderData
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
    }catch(error){
      console.error("Error sending message:", error);
      return "Failed to send message.";
    }
  }

  @Get("{id}")
  public async getOrderById() {
    return "hiiii get by ID";
  }
  @Post()
  public async createOrder(@Body() req:OrderData){
    try{
      const dataOrder = await prisma.order.create({
        data:{
          total:req.total,
          quantity:req.quantity
        }
      })

      const dataDetail = await req.orderDetail.map((item)=>{
        return {
          ...item,
          orderId:dataOrder.id
        }
      })

      const dataOrderDetail = await prisma.orderDetail.createManyAndReturn({
        data:dataDetail
      })

      return {
        dataOrder,
        dataOrderDetail
      }
    }catch(error){
      return error
    }
  }
}
