import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('user_folders')
export class UserFolder {
    @PrimaryGeneratedColumn({ name: 'id_folder' })
    id: number

    @ManyToOne(() => User, (user) => user.folders)
    @JoinColumn({ name: 'id_user' })
    user: User

    @Column({ name: 'name' })
    name: string

    @Column({ name: 'is_deleted' })
    isDeleted: boolean

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp
}
