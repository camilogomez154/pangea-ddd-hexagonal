import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        description: 'The name of user',
        default: 'John',
    })
    @IsNotEmpty()
    @IsString()
    name!: string;

    @ApiProperty({
        description: 'The lastname of user',
        default: 'Doe',
    })
    @IsNotEmpty()
    @IsString()
    lastname!: string;

    @ApiProperty({
        description: 'The email of user',
        default: 'john.doe@email.com',
    })
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email!: string;

    @ApiProperty({
        description: 'The nickname of user',
        default: 'johndoe.1',
    })
    @IsNotEmpty()
    @IsString()
    nickname!: string;

    @ApiProperty({
        description: 'The password of user',
        default: '@123String',
    })
    @IsNotEmpty()
    @IsString()
    password!: string

}