import { ConfigurationService } from '@libs/configuration';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, configurationService: ConfigurationService) {
    console.log("AppController", configurationService.default);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
