import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Timestamps } from "../utilities";
import { IEntity } from '../interfaces';

@Entity()
export class User extends Timestamps implements IEntity {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    lastname!: string;

    @Column({ unique: true })
    email!: string;

    @Column({ unique: true })
    nickname!: string;

    @Column({ select: false })
    password!: string

}