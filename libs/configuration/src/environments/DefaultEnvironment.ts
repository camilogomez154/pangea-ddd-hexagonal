import { GenericEnvironment } from "../abstracts";
import { DefaultType } from '../types/default';
import { DefaultValidation } from "../models";
import { env } from 'process';

export class DefaultEnvironment extends GenericEnvironment<DefaultType, DefaultValidation> {

    constructor() {
        super(DefaultValidation);
    }

    register(): () => DefaultType {
        return () => ({
            default: {
                port: Number.parseInt(String(env["PORT"]), 10),
                environment: String(env["ENVIRONMENT"]),
            }
        })
    }

}