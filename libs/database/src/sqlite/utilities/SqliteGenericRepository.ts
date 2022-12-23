import { Repository } from "typeorm";
import { AbstractGenericRepository } from "../abstracts";

export class SqliteGenericRepository<T> extends AbstractGenericRepository<T> {

    constructor(public readonly repository: Repository<T>) {
        super();
    }

    async findAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async findOne(id: string): Promise<T> {
        return await this.repository.findOne({ where: { id } } as any);
    }

    async create(item: Partial<T>): Promise<T> {
        const itemCreated = this.repository.create();
        return await this.repository.save({ ...itemCreated, ...item });
    }

    async update(id: string, item: Partial<T>): Promise<void> {
        await this.repository.update(id, item as any);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async softdelete(id: string): Promise<void> {
        await this.repository.softDelete(id);
    }

}