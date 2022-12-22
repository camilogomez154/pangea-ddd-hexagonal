import { AppController } from './app.controller';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { SqliteModule } from '@libs/database';

@Module({
  controllers: [AppController],
  imports: [SqliteModule],
  providers: [AppService],
})
export class AppModule { }
