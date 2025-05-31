import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('logs')
export class Log {
    @PrimaryGeneratedColumn({ name: 'id_log' })
    id: number

    @Column({ name: 'event' })
    event: number

    @Column({ name: 'description' })
    description: string

    @ManyToOne(() => User, (user) => user.logs)
    @JoinColumn({name: 'id_user'})
    user: User

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp
}
