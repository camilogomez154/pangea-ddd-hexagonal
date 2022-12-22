import { OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { AbstractSqliteDatabase } from './abstracts';
import { UserRepository } from './repositories';
import { User } from './entities';

@Injectable()
export class SqliteService extends AbstractSqliteDatabase implements OnApplicationBootstrap {

    public users: UserRepository;

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
        super();
    }

    onApplicationBootstrap() {
        this.users = new UserRepository(this.userRepository);
    }

}
