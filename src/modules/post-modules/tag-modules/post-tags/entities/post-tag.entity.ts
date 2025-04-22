import { Post } from "src/modules/post-modules/posts/entities/post.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "../../tags/entities/tag.entity";

@Entity('post_tags')
export class PostTag {
    @PrimaryGeneratedColumn({name: 'id_pt'})
    id: number

    @ManyToOne(() => Post,(post) => post.postTags)
    @JoinColumn({name: 'id_post'})
    post: Post

    @ManyToOne(() => Tag,(tag) => tag.postTags)
    @JoinColumn({name: 'id_tag'})
    tag: Tag
}
