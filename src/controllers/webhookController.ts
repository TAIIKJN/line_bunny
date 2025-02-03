import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { Body, Controller, Get, Post, Response, Route } from "tsoa";

const token =
  "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";

const prisma = new PrismaClient()

interface WebhookPayload {
    destination?: string;
    events: Array<{
        mode?:string;
        deliveryContext?:Record<string, any>
        webhookEventId?:string
        type: string;
        replyToken: string;
        source: {
            userId: string;
            type: string;
        };
        timestamp: number;
        message: {
            id?:string;
            type: string;
            text?: string;
            quoteToken?:string;
            stickerId?:string;
            packageId?:string;
            stickerResourceType?:string;
            keywords?: string[];
            emojis?: string[] | { productId: string; emojiId: string; index: number; length: number }[];
        };
    }>;
}

@Route("webhook")
export class webhookController extends Controller {
    @Post()
    @Response(200, "Webhook received successfully")
    public async receiveWebhook(@Body() payload: WebhookPayload){
        try {
            if(!payload || !payload.events || !Array.isArray(payload.events)){
                this.setStatus(400)
                return {message:"Invalid payload structure"}
            }
            console.log("Received Webhook:", payload);

            // ตรวจสอบว่ามี events อย่างน้อยหนึ่งรายการ
            if (payload.events.length > 0) {
                console.log("Event Source:", payload.events[0]?.source);

                const dataUserLine = await axios.get(
                    `https://api.line.me/v2/bot/profile/${payload.events[0].source.userId}`,
                    {
                      headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                      },
                    }
                  );

                if(dataUserLine){
                    const dataUser = await prisma.user.findFirst({
                        where:{
                            userId:dataUserLine.data.userId
                        }
                    })

                    if(!dataUser){
                        await prisma.user.create({
                            data:{
                                userId:dataUserLine.data.userId,
                                name:dataUserLine.data.displayName
                            }
                        })
                    } else {
                        await prisma.user.update({
                            data:{
                                name:dataUserLine.data.displayName
                            },
                            where:{
                                id:dataUser.id,
                                userId:dataUserLine.data.userId
                            }
                        })
                    }
                }
                
            }
            
         // หากต้องการตอบกลับจากการรับ webhook
         this.setStatus(200); // ตอบกลับด้วย HTTP 200
         return { message: "Webhook received successfully" };
        } catch (error) {
            console.error("Error processing webhook:", error);
            this.setStatus(500);
            return { message: "Internal Server Error" };
        }
    }

    @Get()
    public async getProfile(){
        const data_massage = await axios.get(
            `https://api.line.me/v2/bot/profile/Uaf85ed5e769f298f7255a8f0f6f9ae6a`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );

          console.log("data_massage",data_massage);
          
    }
}

