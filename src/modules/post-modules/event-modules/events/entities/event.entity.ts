import { File } from "src/modules/files/entities/files.entity";
import { City } from "src/modules/location-modules/cities/entities/city.entity";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { EventForum } from "../../event-forums/entities/event-forum.entity";

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

    @ManyToOne(() => City,(city) => city.events)
    @JoinColumn({name: 'id_city'})
    city: City

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({name: 'created_at'})
    createdAt: Timestamp

    @OneToMany(() => Post,(post) => post.event)
    posts: Post[]

    @OneToOne(() => File,(file) => file.event)
    @JoinColumn({name: 'id_file'})
    file: File

    @OneToMany(() => EventForum,(forum) => forum.event)
    forums: EventForum
}