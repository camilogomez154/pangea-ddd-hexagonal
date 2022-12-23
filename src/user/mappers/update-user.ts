import { PickType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user";

export class UpdateUserDto extends PickType(CreateUserDto, ['email', 'password', 'nickname'] as const) { }