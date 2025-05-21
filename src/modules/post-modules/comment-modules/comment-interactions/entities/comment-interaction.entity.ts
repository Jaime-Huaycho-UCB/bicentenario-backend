import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Comment } from "../../comments/entities/comment.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";

@Entity('comment_interactions')
export class CommentInteraction {
    @PrimaryGeneratedColumn({name: 'id_interaction'})
    id: number

    @ManyToOne(() => Comment,(comment) => comment.interactions)
    @JoinColumn({name: 'id_comment'})
    comment: Comment

    @ManyToOne(() => User,(user) => user.commentInteractions)
    @JoinColumn({name: 'id_user'})
    user: User

    @Column({name: 'type'})
    type: number

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({name: 'created_at',type: 'timestamp without time zone'})
    createdAt: Timestamp
}
