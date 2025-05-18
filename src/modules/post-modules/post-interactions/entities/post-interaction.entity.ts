import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Post } from "../../posts/entities/post.entity";

@Entity('post_interactions')
export class PostInteraction {
    @PrimaryGeneratedColumn({name: 'id_interaction'})
    id: number

    @ManyToOne(() => User,(user) => user.postInteractions)
    @JoinColumn({name: 'id_user'})
    user: User

    @ManyToOne(() => Post,(post) => post.interactions)
    @JoinColumn({name: 'id_post'})
    post: Post

    @Column({name: 'type'})
    type: number

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({name: 'created_at',type: 'timestamp without time zone'})
    createdAt: Timestamp
}
