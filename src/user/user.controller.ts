import { Controller, Post, Put, Get, Delete, Body, Param } from '@nestjs/common';

import { User } from '@libs/database/sqlite/entities';
import { SqliteService } from '@libs/database';

import { CreateUserDto, UpdateUserDto } from './mappers';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller({
    version: 'v1',
    path: 'users',
})
export class UserController {

    constructor(private readonly sqliteService: SqliteService) { }

    @Post()
    async create(@Body() item: CreateUserDto): Promise<User> {
        return this.sqliteService.users.create(item);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() item: UpdateUserDto): Promise<User> {
        await this.sqliteService.users.update(id, item);
        return await this.sqliteService.users.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User> {
        await this.sqliteService.users.delete(id);
        return await this.sqliteService.users.findOne(id);
    }

    @Get(':id')
    async getOneById(@Param('id') id: string): Promise<User> {
        return await this.sqliteService.users.findOne(id);
    }

    @Get()
    async getAll(): Promise<User[]> {
        return await this.sqliteService.users.findAll();
    }

}
