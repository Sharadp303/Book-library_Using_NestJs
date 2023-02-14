import { Injectable,UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './Schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt/dist';
import { signUpDto } from './dto/signUp.dto';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
constructor(
    @InjectModel(User.name) 
    private userModel:Model<User>,
    private jwtService:JwtService)
    {}


async signUp(signUpDto:signUpDto):Promise<User>{
const {name,email,password}=signUpDto

const hashPass = await bcrypt.hash(password,10)

const user = await this.userModel.create({
    name,
    email,
    password:hashPass

})

return user;
}

async login(loginDto:loginDto):Promise<{token:string}>{
  const {email,password}=loginDto;

    const user=await this.userModel.findOne({email})
    if(!user){
        throw new UnauthorizedException("Invalid username or password")
    
    }
    const isValidPass=await bcrypt.compare(password,user.password)
    if(!isValidPass){
        throw new UnauthorizedException("Invalid username or password")
    }
    const token =this.jwtService.sign({id:user._id})

return {token}
}

}
