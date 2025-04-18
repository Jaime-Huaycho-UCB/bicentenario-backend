import { File } from "src/modules/files/entities/files.entity";
import { City } from "src/modules/location-modules/cities/entities/city.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PostStatus } from "../../post-statuses/entities/post-status.entity";
import { Event } from "../../event-modules/events/entities/event.entity";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn({name: 'id_post'})
    id: number

    @ManyToOne(() => User,(user) => user.posts)
    @JoinColumn({name: 'id_user'})
    user: User

    @Column({name: 'title'})
    title: string

    @Column({name: 'description'})
    description: string

    @Column({name: 'stars'})
    stars: number

    @Column({name: 'views'})
    views: number

    @Column({name: 'likes'})
    likes: number

    @Column({name: 'dislikes'})
    dislikes: number

    @ManyToOne(() => City,(city) => city.posts)
    city: City

    @Column({name: 'type'})
    type: number

    @OneToOne(() => File,(file) => file.post)
    @JoinColumn({name: 'id_file'})
    file: File

    @Column({name: 'content'})
    content: string

    @ManyToOne(() => PostStatus,(postStatus) => postStatus.posts)
    @JoinColumn({name: 'id_status'})
    status: PostStatus

    @Column({name: 'id_head'})
    head: number

    @Column({name: 'id_child'})
    child: number

    @ManyToOne(() => User,(user) => user.approvals)
    curator: User

    @ManyToOne(() => Event,(event) => event.posts)
    @JoinColumn({name: 'id_event'})
    event: Event
}