import { GenericEnvironment } from '../abstracts/GenericEnvironment';
import * as environments from '../environments';

const Environments: GenericEnvironment[] = Object.values(environments).map(Environment => new Environment())

export const register = () => {
    return Environments.map(environmentClass => environmentClass.register());
}

export const validate = (plain: Record<string, any>) => {
    return Environments.reduce((memory, environmentClass) => {
        const object = environmentClass.validate(plain);
        return { ...memory, ...object };
    }, {})
}