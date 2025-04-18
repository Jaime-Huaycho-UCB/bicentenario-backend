import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('rols')
export class Rol {
    @PrimaryGeneratedColumn({name: 'id_rol'})
    id: number

    @Column({name: 'name'})
    name: string

    @OneToMany(() => User,(user) => user.rol)
    users: User[]
}