import { ClassConstructor } from "class-transformer";

export interface IEnvironmentValidation<R> {
    validate(environment: Record<string, unknown>): R
}