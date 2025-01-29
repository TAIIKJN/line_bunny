import { Body, Controller, Get, Post, Response, Route } from "tsoa";
import axios from "axios";

const token =
  "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";
@Route("product")
export class productController extends Controller {
  @Get()
  public async getProductAll() {
    return "hiiii";
    // const data = {
    //   to: "USER_ID",
    //   messages: [
    //     {
    //       type: "flex",
    //       altText: "This is a Flex Message",
    //       contents: {
    //         type: "bubble",
    //         body: {
    //           type: "box",
    //           layout: "horizontal",
    //           contents: [
    //             {
    //               type: "text",
    //               text: "Hello,",
    //             },
    //             {
    //               type: "text",
    //               text: "World!",
    //             },
    //           ],
    //         },
    //       },
    //     },
    //   ],
    // };
    // const data_massage = await axios.post(
    //   "https://api.line.me/v2/bot/message/push",
    //   data,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  }

  @Get("{id}")
  public async getProductById() {
    return "hiiii get by ID";
  }
}
