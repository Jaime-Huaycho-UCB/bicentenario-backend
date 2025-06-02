import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";

@Entity('user_downloads')
export class UserDownload {
    @PrimaryGeneratedColumn({ name: 'id_download' })
    id: number

    @ManyToOne(() => User, (user) => user.downloads)
    @JoinColumn({ name: 'id_user' })
    user: User

    @ManyToOne(() => Post, (post) => post.userDownloads)
    @JoinColumn({ name: 'id_post' })
    post: Post

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp
}
