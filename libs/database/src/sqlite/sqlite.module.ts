import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { resolve } from 'path';

import { SqliteService } from './sqlite.service';
import * as Entities from './entities';

const entities = Object.values(Entities);

@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
    TypeOrmModule.forRoot({
      database: resolve("sqlite", "database.sqlite"),
      synchronize: true,
      type: "sqlite",
      logging: true,
      entities,
    }),
  ],
  providers: [SqliteService],
  exports: [SqliteService],
})
export class SqliteModule { }
