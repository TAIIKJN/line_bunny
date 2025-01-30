import { PrismaClient } from "@prisma/client";
import { Body, Controller, Get, Path, Post, Route } from "tsoa";

const prisma = new PrismaClient()
interface UserData {
    name:string
    userId:string
  }

@Route("user")
export class userController extends Controller {
    @Get()
    public async getUserAll(){
        const data = await prisma.user.findMany()
        return data
    }

    @Get("{id}")
    public async getUserById(@Path() id:string){
        
        return "dataById"
    }

    @Post()
    public async createUser(@Body() req:UserData){
        try{
            const data = await prisma.user.create({
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