import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Post } from "../../posts/entities/post.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";

@Entity('post_stars')
export class PostStar {
    @PrimaryGeneratedColumn({name: 'id_star'})
    id: number

    @ManyToOne(() => Post,(post) => post.postStars)
    @JoinColumn({name: 'id_post'})
    post: Post

    @ManyToOne(() => User,(user) => user.postStars)
    @JoinColumn({name: 'id_user'})
    user: User

    @Column({name: 'number'})
    number: number

    @CreateDateColumn({name: 'created_at',type: 'timestamp without time zone'})
    createdAt: Timestamp
}
