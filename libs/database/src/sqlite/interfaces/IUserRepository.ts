import { AbstractGenericRepository } from '../abstracts/AbstractGenericRepository';
import { User } from '../entities';

export interface IUserRepository extends AbstractGenericRepository<User> {
    findByNicknameAndEmail(nickname: string, email: string): Promise<User>
    findByNickname(nickname: string): Promise<User>
    findByEmail(email: string): Promise<User>
}