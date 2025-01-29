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
    @Response(200,"Webhook received")
    public async receiveWebhook(@Body() payload: WebhookPayload):Promise<void> {
        console.log("Received Webhook:", payload,payload.events[0].source);
         // หากต้องการตอบกลับจากการรับ webhook
         this.setStatus(200); // ตอบกลับด้วย HTTP 200
    }
}

