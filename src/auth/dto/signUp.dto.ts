import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class signUpDto{
    @IsNotEmpty()
    @IsString()
   readonly name:string;

   @IsNotEmpty()
   @IsEmail({},{message:"ENter a correct email"})
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
   readonly password:string;
}