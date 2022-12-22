import { UserRepository } from "../repositories";

export abstract class AbstractSqliteDatabase {
    public abstract readonly users: UserRepository;
};