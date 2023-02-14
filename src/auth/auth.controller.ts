import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';
import { signUpDto } from './dto/signUp.dto';
import { User } from './Schemas/user.schema';

@Controller('auth')
export class AuthController {
constructor(private authService:AuthService){}

@Post('signup')
async signUp(@Body() signUpDto:signUpDto):Promise<User>{
return this.authService.signUp(signUpDto)
}


@Post('signin')
async login(@Body() loginDto:loginDto):Promise<{token:string}>{
    return this.authService.login(loginDto)
}


}
