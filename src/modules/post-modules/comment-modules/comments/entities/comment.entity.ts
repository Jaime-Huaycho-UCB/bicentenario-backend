import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { CommentInteraction } from "../../comment-interactions/entities/comment-interaction.entity";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn({ name: 'id_comment' })
    id: number

    @ManyToOne(() => Post, (post) => post.comments)
    @JoinColumn({ name: 'id_post' })
    post: Post

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn({ name: 'id_user' })
    user: User

    @Column({ name: 'content' })
    content: string

    @Column({ name: 'likes' })
    likes: number

    @Column({ name: 'dislikes' })
    dislikes: number

    @Column({ name: 'head' })
    head: number

    @Column({ name: 'is_deleted' })
    isDeleted: boolean

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @OneToMany(() => CommentInteraction,(interaction) => interaction.comment)
    interactions: CommentInteraction[]
}
