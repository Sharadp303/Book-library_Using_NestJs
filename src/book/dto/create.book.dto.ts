import { IsNotEmpty } from "class-validator";
import { IsEnum, IsNumber, IsString } from "class-validator";
import { Category } from "../schemas/book.schema"

export class bookdto{

       @IsNotEmpty()
       @IsString()   
       readonly title:string;

       @IsNotEmpty()
       @IsString()   
       readonly description:string;

       @IsNotEmpty()
       @IsString()   
       readonly author:string;

       @IsNotEmpty()
       @IsNumber()   
       readonly price:number;

       @IsNotEmpty()
       @IsEnum(Category,{message:"Please enter correct category"})
       readonly category:Category;       
    }
