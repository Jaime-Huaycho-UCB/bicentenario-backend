import { Event } from "src/modules/post-modules/event-modules/events/entities/event.entity";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('files')
export class File {
    @PrimaryGeneratedColumn({name: 'id_file'})
    id: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'route'})
    route: string

    @Column({name: 'type'})
    type: string

    @Column({name: 'size'})
    size: number

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({name: 'created_at'})
    createdAt: Timestamp

    @OneToOne(() => Post,(post) => post.file)
    post: Post

    @OneToOne(() => Event,(event) => event.file)
    event: Event
}
