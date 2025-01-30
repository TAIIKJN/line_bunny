import { Body, Controller, Get, Post, Response, Route } from "tsoa";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const token =
  "mTuXUjOm8dKhn805+2xOAOfDoq5NBEzYT9hx+DbF8IFCInIHLZbZ1orjdtyrCADJmsCfKzlJUNZF9kzRw24K9zrPj4tnkJkAAsYJtO0O1eGGWOMAVoB2J2B7R03I/tp+HFYRVVD09GEod/NiCukB4QdB04t89/1O/w1cDnyilFU=";

interface CategoriesData{
  name:string
  description:string
}

@Route("categories")
export class categoriesController extends Controller {

  @Get()
  public async getCategoriesAll() {
    try{
      const data = await prisma.categories.findMany()
      return data
    }catch(error){
      return error
    }
  }
  @Get("{id}")
  public async getCategoriesById() {
    return "hiiii get by ID";
  }
  @Post()
  public async createCategories(@Body() req:CategoriesData){
    try{
      const data = await prisma.categories.create({
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
