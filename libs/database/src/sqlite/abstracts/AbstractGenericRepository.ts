export abstract class AbstractGenericRepository<T> {
    abstract update(id: string, item: Partial<T>): Promise<void> | void;
    abstract softdelete(id: string): Promise<void> | void;
    abstract delete(id: string): Promise<void> | void;
    abstract findOne(id: string): Promise<T>;
    abstract create(item: Partial<T>): Promise<T>;
    abstract findAll(): Promise<T[]>;
}