import { Controller ,Get} from '@nestjs/common';
import { Post ,Body,Param,Put,Delete} from '@nestjs/common/decorators';

import { BookService } from './book.service';
import { bookdto } from './dto/create.book.dto';
import { updatebookdto } from './dto/update.book.dto';
import {Book} from './schemas/book.schema'

@Controller('books')
export class BookController {
constructor( private bookService:BookService){}

@Get()
async findAllBooks():Promise<Book[]>{
return this.bookService.findAllBooks()
}

@Post('create')
async createBook(@Body() book:bookdto):Promise<Book>{
    return this.bookService.createBook(book)

}

@Get(':id')
async findById(@Param('id') id:string):Promise<Book>{

return this.bookService.findById(id)
}

@Put('update/:id')
async updateBook(
    @Param('id') id:string,
    @Body() book:updatebookdto
):Promise<Book>{
       return this.bookService.updateBook(id,book)
}

@Delete(':id')
async deleteBook(@Param('id') id:string):Promise<Book>{
return this.bookService.deleteBook(id);
}
}
