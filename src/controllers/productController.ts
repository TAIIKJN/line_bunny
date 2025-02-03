import { Body, Controller, Get, Post, Response, Route } from "tsoa";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const token =
  "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";

interface ProductData{
  name:string;
  description:string;
  price:string;
  image:string;
  categoriesId:string;
}

@Route("product")
export class productController extends Controller {
  @Get()
  public async getProductAll() {
    try{
      const dataProduct = await prisma.categories.findMany({
        include:{
          product:true
        }
      })

      const data = {
        to: "Uaf85ed5e769f298f7255a8f0f6f9ae6a",
        messages: [
          {
            type: "flex",
            altText:"🏷 Product for you 🍞",
            contents: {
              type: "carousel",
              contents: dataProduct.filter((status)=> status.product.length > 0)
              .map((item) => (
                [
                  {
                    type: "bubble",
                    header:{
                      type: "box",
                      layout: "vertical",
                      contents: [
                        {
                          type: "text",
                          text: `${item.type==='Drink' ? '🍹' : '🍰' } ${item.name} `,
                          weight: "bold",
                          align: "center",
                        },
                      ]
                    },
                    body: {
                      type: "box",
                      layout: "vertical",
                      contents: item.product.map((product)=> ([
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
                      ]
                    )).flat()
                    },
                    footer:{
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
                ]
              )).flat()
            }
          },
        ],
      };

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
    return {
      message:"Message sent successfully!",
      dataProduct
    };
    }catch(error){
      console.error("Error sending message:", error);
      return "Failed to send message.";
    }
  }

  @Get("{id}")
  public async getProductById() {
    return "hiiii get by ID";
  }
  @Post()
  public async createProduct(@Body() req:ProductData){
    try{
      const data = await prisma.product.create({
        data:{
          ...req
        }
      })

      return data
    }catch(error){
      return error
    }
  }
}
