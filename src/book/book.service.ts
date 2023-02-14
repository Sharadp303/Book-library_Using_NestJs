import { Injectable,NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import {InjectModel} from '@nestjs/mongoose'
import   mongoose, {Model} from 'mongoose';
import { bookdto } from './dto/create.book.dto';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
    constructor(
   @InjectModel(Book.name) private bookModel:Model<Book>
    ) {}

async  findAllBooks():Promise<Book[]>{
    const books=await this.bookModel.find();
    
    return books; 
}

async createBook(book:bookdto):Promise<Book>{
    const res= await this.bookModel.create(book)
return res;
}

async findById(id:string):Promise<Book>{
    const isValidId=mongoose.isValidObjectId(id)

    if(!isValidId){
        throw new BadRequestException("Please Enter a valid ID")
    }
    
    
    const res=await this.bookModel.findById(id)
    if(!res){
        throw new NotFoundException('Book not found')
    }
    return res;

}

async updateBook(id:string,book:Book):Promise<Book>{
const res = await this.bookModel.findByIdAndUpdate(id,book,{
    new:true,
    runValidators:true
}

);
if(!res){
    throw new NotFoundException("Book not found")
} 
return res;

}

async deleteBook(id:string):Promise<Book>{
        return await this.bookModel.findByIdAndDelete(id);
}


 }
