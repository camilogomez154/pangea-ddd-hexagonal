import { IsEnum, IsNotEmpty, IsNumberString, IsString } from "class-validator"

export enum EnvironmentEnum {
    DEVELOPMENT = "development",
    PRODUCTION = "production",
    TESTING = "testing",
    STAGE = "stage",
}

export class DefaultValidation {

    @IsEnum(EnvironmentEnum)
    @IsNotEmpty()
    @IsString()
    ENVIRONMENT!: string

    @IsNumberString()
    @IsNotEmpty()
    PORT!: number

}