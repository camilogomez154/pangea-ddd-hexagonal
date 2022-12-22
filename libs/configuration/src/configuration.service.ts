import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

import { IConfiguration } from './interfaces/IConfiguration';
import { DefaultType } from './types';

@Injectable()
export class ConfigurationService implements IConfiguration {

    constructor(
        private readonly configService: ConfigService,
    ) { }

    get default(): DefaultType {
        return this.configService.getOrThrow("default");
    }

}
