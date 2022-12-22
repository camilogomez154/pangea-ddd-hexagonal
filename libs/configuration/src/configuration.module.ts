import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { ConfigurationService } from './configuration.service';
import { register, validate } from './utilities';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: register(),
      isGlobal: true,
      validate,
    })
  ],
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule { }
