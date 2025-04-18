import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('events')
export class Event {
    @PrimaryGeneratedColumn({name: 'id_event'})
    id: number

    @Column({name: 'title'})
    title: string

    @Column({name: 'description'})
    description: string

    @Column({name: 'content'})
    content: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Timestamp

    @OneToMany(() => Post,(post) => post.event)
    posts: Post[]
}