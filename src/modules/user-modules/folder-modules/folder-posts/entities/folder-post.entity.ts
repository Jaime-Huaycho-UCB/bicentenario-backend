import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne, JoinColumn } from "typeorm";
import { UserFolder } from "../../user-folders/entities/user-folder.entity";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";

@Entity('folder_posts')
export class FolderPost {
    @PrimaryGeneratedColumn({name: 'id_fp'})
    id: number

    @ManyToOne(() => UserFolder, userFolder => userFolder.folderPosts, { eager: true })
    @JoinColumn({ name: 'id_folder' })
    folder: UserFolder;

    @ManyToOne(() => Post, post => post.folderPosts, { eager: true })
    @JoinColumn({ name: 'id_post' })
    post: Post;
}
