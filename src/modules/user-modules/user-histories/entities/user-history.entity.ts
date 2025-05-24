import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";

@Entity('user_histories')
export class UserHistory {
    @PrimaryGeneratedColumn({ name: 'id_history' })
    id: number

    @ManyToOne(() => User, (user) => user.histories)
    @JoinColumn({ name: 'id_user' })
    user: User

    @ManyToOne(() => Post, (post) => post.userHistories)
    @JoinColumn({ name: 'id_post' })
    post: Post

    @Column({ name: 'is_deleted' })
    isDeleted: boolean

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp without time zone' })
    updatedAt: Timestamp
}
