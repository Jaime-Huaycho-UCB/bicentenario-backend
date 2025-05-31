import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { PostForum } from "../../post-forums/entities/post-forum.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";

@Entity('post_forum_messages')
export class PostForumMessage {
    @PrimaryGeneratedColumn({ name: 'id_message' })
    id: number

    @ManyToOne(() => PostForum, (forum) => forum.messages)
    @JoinColumn({ name: 'id_forum' })
    forum: PostForum

    @ManyToOne(() => User, (user) => user.postForumMessages)
    @JoinColumn({ name: 'id_user' })
    user: User

    @Column({ name: 'content' })
    content: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp
}