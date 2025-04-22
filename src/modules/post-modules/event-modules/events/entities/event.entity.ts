import { City } from "src/modules/location-modules/cities/entities/city.entity";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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

    @ManyToOne(() => City,(city) => city.events)
    @JoinColumn({name: 'id_city'})
    city: City

    @OneToMany(() => Post,(post) => post.event)
    posts: Post[]
}