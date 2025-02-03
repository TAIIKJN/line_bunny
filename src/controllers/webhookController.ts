import { Body, Controller, Post, Response, Route } from "tsoa";

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
            id?:string
            type: string;
            text: string;
            quoteToken?:string
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
}

