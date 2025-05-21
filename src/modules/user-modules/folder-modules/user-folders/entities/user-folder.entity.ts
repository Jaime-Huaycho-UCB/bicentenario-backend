import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { FolderPost } from "../../folder-posts/entities/folder-post.entity";
import { ManyToMany, JoinTable } from "typeorm";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";

@Entity('user_folders')
export class UserFolder {
    @PrimaryGeneratedColumn({ name: 'id_folder' })
    id: number

    @ManyToOne(() => User, (user) => user.folders)
    @JoinColumn({ name: 'id_user' })
    user: User

    @Column({ name: 'name' })
    name: string

    @Column({ name: 'is_deleted' })
    isDeleted: boolean

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @OneToMany(() => FolderPost,(fp) => fp.folder)
    folderPosts: FolderPost[]

    @ManyToMany(() => Post, {eager: false})
    @JoinTable({
        name: 'folder_posts',
        joinColumn: { name: 'id_folder', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_post', referencedColumnName: 'id' }
    })
    posts: Post[];
}
