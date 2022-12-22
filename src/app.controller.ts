import { ConfigurationService } from '@libs/configuration';
import { SqliteService } from '@libs/database';
import { User } from '@libs/database/sqlite/entities';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly sqliteService: SqliteService) { }

  @Get()
  getHello() {
    return this.sqliteService.users.findAll();
  }
}
