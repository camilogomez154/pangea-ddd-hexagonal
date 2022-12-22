import { ClassConstructor, plainToInstance } from 'class-transformer';
import { InternalServerErrorException } from '@nestjs/common';
import { validateSync } from 'class-validator';

import { IEnvironmentRegister, IEnvironmentValidation } from '../interfaces';

export abstract class GenericEnvironment<R = Object, C = Object> implements IEnvironmentRegister<R>, IEnvironmentValidation<R> {

    constructor(private readonly classValidate: ClassConstructor<C>) { }

    validate(environment: Record<string, unknown>): R {
        const instance = plainToInstance(this.classValidate, environment);
        const [error] = validateSync(instance as Object);

        if (error) {
            throw new InternalServerErrorException(error.toString());
        }

        return this.register()();
    }

    abstract register(): () => R;


}