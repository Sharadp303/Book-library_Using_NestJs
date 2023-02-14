import { IsNumber, IsOptional, IsString } from "class-validator";
import { Category } from "../schemas/book.schema"

export class updatebookdto{

   @IsString()
   @IsOptional()
       readonly title:string;

       
   @IsString()
   @IsOptional()
       readonly description:string;

       
   @IsString()
   @IsOptional()
       readonly author:string;

   
       @IsNumber()
       @IsOptional()    
       readonly price:number;

       
   @IsString()
   @IsOptional()
       readonly category:Category;       
    }
