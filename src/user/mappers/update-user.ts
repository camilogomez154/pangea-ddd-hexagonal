import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({
        description: 'The name of user',
        default: 'John',
    })
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name!: string;

    @ApiProperty({
        description: 'The lastname of user',
        default: 'Doe',
    })
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    lastname!: string;
}