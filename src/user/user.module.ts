import { SqliteModule } from '@libs/database';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [SqliteModule],
})
export class UserModule { }
