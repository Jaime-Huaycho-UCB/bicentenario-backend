import { File } from "src/modules/files/entities/files.entity";
import { City } from "src/modules/location-modules/cities/entities/city.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { PostStatus } from "../../post-statuses/entities/post-status.entity";
import { Event } from "../../event-modules/events/entities/event.entity";
import { PostTag } from "../../tag-modules/post-tags/entities/post-tag.entity";
import { Tag } from "../../tag-modules/tags/entities/tag.entity";
import { Comment } from "../../comment-modules/comments/entities/comment.entity";
import { PostInteraction } from "../../post-interactions/entities/post-interaction.entity";
import { PostStar } from "../../post-stars/entities/post-star.entity";
import { FolderPost } from "src/modules/user-modules/folder-modules/folder-posts/entities/folder-post.entity";
import { UserHistory } from "src/modules/user-modules/user-histories/entities/user-history.entity";
import { PostForum } from "../../forum-modules/post-forums/entities/post-forum.entity";
import { UserDownload } from "src/modules/user-modules/user-downloads/entities/user-download.entity";
import { SurveysAnswered } from "src/modules/survey-modules/surveys-answered/entities/surveys-answered.entity";

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

    @Column({name: 'stars',type: 'numeric',scale: 6,precision: 1})
    stars: number

    @Column({name: 'views'})
    views: number

    @Column({name: 'likes'})
    likes: number

    @Column({name: 'dislikes'})
    dislikes: number

    @ManyToOne(() => City,(city) => city.posts)
    @JoinColumn({name: 'id_city'})
    city: City

    @Column({name: 'type'})
    type: number

    @OneToOne(() => File,(miniature) => miniature.post)
    @JoinColumn({name: 'id_miniature'})
    miniature: File

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

    @ManyToOne(() => User,(curator) => curator.approvals)
    @JoinColumn({name: 'id_curator'})
    curator: User | null

    @Column({name: 'is_published'})
    isPublished: boolean

    @ManyToOne(() => Event,(event) => event.posts)
    @JoinColumn({name: 'id_event'})
    event: Event

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({name: 'created_at',type: 'timestamp without time zone'})
    createdAt: Timestamp

    @UpdateDateColumn({name: 'updated_at',type: 'timestamp without time zone'})
    updatedAt: Timestamp

    @OneToMany(() => PostTag,(postTags) => postTags.post)
    postTags: PostTag[]

    @ManyToMany(() => Tag, { eager: false })
    @JoinTable({
        name: 'post_tags',
        joinColumn: { name: 'id_post', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'id_tag', referencedColumnName: 'id' }
    })
    tags: Tag[];

    @OneToMany(() => Comment,(comment) => comment.post)
    comments: Comment[]

    @OneToMany(() => PostInteraction,(interaction) => interaction.post)
    interactions: PostInteraction[]

    @OneToMany(() => PostStar,(postStar) => postStar.post)
    postStars: PostStar[]

    @OneToMany(() => FolderPost,(fp) => fp.post)
    folderPosts: FolderPost[]

    @OneToMany(() => UserHistory,(history) => history.post)
    userHistories: UserHistory[]

    @OneToMany(() => PostForum,(forum) => forum.post)
    forums: PostForum[]

    @OneToMany(() => UserDownload,(download) => download.post)
    userDownloads: UserDownload[]

    @OneToMany(() => SurveysAnswered,(answer) => answer.post)
    surveysAnswered: SurveysAnswered[]
}