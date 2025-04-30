import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostTag } from "../../post-tags/entities/post-tag.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn({name: 'id_tag'})
    id: number

    @Column({name: 'name'})
    name: string

    @OneToMany(() => PostTag,(postTag) => postTag.tag)
    postTags: PostTag
}
