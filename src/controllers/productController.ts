import { Body, Controller, Get, Post, Response, Route } from "tsoa";
import axios from "axios";

const token =
  "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";

@Route("product")
export class productController extends Controller {
  @Post()
  public async getProductAll() {
    const data = {
      to: "Uaf85ed5e769f298f7255a8f0f6f9ae6a",
      messages: [
        {
          type: "flex",
          altText: "This is a Flex Message",
          contents: {
            type: "bubble",
            body: {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "text",
                  text: "Hello,",
                },
                {
                  type: "text",
                  text: "World!",
                },
              ],
            },
          },
        },
      ],
    };

    try{
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
    }catch(error){
      console.error("Error sending message:", error);
      return "Failed to send message.";
    }
  }

  @Get("{id}")
  public async getProductById() {
    return "hiiii get by ID";
  }
}
