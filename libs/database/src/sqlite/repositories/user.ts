import bcrypt from 'bcrypt';

import { SqliteGenericRepository } from '../utilities';
import { IUserRepository } from '../interfaces';
import { User } from '../entities';

export class UserRepository extends SqliteGenericRepository<User> implements IUserRepository {

    async create(item: Partial<User>): Promise<User> {
        item.password = bcrypt.hashSync(item.password, "SecretPasswordString")
        return super.create(item);
    }

    findByNicknameAndEmail(nickname: string, email: string): Promise<User> {
        return this.repository.findOneBy({ nickname, email })
    }

    findByNickname(nickname: string): Promise<User> {
        return this.repository.findOneBy({ nickname })
    }

    findByEmail(email: string): Promise<User> {
        return this.repository.findOneBy({ email })
    }

}