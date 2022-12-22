import { ConfigurationModule } from '@libs/configuration';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';

@Module({
  imports: [ConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
