import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "../../posts/entities/post.entity";

@Entity('posts_statuses')
export class PostStatus {
    @PrimaryGeneratedColumn({name: 'id_status'})
    id: number

    @Column({name: 'name'})
    name: string

    @OneToMany(() => Post,(post) => post.status)
    posts: Post[]
}
