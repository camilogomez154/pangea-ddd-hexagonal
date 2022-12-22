import { SqliteGenericRepository } from '../utilities';
import { IUserRepository } from '../interfaces';
import { User } from '../entities';

export class UserRepository extends SqliteGenericRepository<User> implements IUserRepository {

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