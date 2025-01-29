import { Body, Controller, Post, Response, Route } from "tsoa";

interface WebhookPayload {
    event: string;
    data: any;
}

@Route("webhook")
export class webhookController extends Controller {
    @Post()
    @Response(200,"Webhook received")
    public async receiveWebhook(@Body() payload: WebhookPayload){
        console.log("Received Webhook:", payload);
    }
}

