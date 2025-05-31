import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { PostForumMessage } from "../../post-forum-messages/entities/post-forum-message.entity";

@Entity('post_forums')
export class PostForum {
    @PrimaryGeneratedColumn({ name: 'id_forum' })
    id: number

    @Column({ name: 'title' })
    title: string

    @Column({ name: 'description' })
    description: string

    @ManyToOne(() => User, (user) => user.postForums)
    @JoinColumn({ name: 'id_user' })
    user: User

    @ManyToOne(() => Post, (post) => post.forums)
    @JoinColumn({ name: 'id_post' })
    post: Post

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @OneToMany(() => PostForumMessage,(message) => message.forum)
    messages: PostForumMessage[]
}
