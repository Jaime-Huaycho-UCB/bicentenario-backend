import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Timestamp, Entity, OneToMany, OneToOne } from "typeorm"
import { Rol } from "../../rols/entities/rol.entity"
import { Post } from "src/modules/post-modules/posts/entities/post.entity"
import { Comment } from "src/modules/post-modules/comment-modules/comments/entities/comment.entity"
import { PostInteraction } from "src/modules/post-modules/post-interactions/entities/post-interaction.entity"
import { PostStar } from "src/modules/post-modules/post-stars/entities/post-star.entity"
import { CommentInteraction } from "src/modules/post-modules/comment-modules/comment-interactions/entities/comment-interaction.entity"
import { UserFolder } from "../../folder-modules/user-folders/entities/user-folder.entity"
import { UserHistory } from "../../user-histories/entities/user-history.entity"
import { ResearcherApplication } from "../../researcher-applications/entities/researcher-application.entity"
import { PostForum } from "src/modules/post-modules/forum-modules/post-forums/entities/post-forum.entity"
import { PostForumMessage } from "src/modules/post-modules/forum-modules/post-forum-messages/entities/post-forum-message.entity"
import { Log } from "src/modules/logs/entities/log.entity"
import { UserDownload } from "../../user-downloads/entities/user-download.entity"
import { SurveysAnswered } from "src/modules/survey-modules/surveys-answered/entities/surveys-answered.entity"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({name: 'id_user'})
    id: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'email'})
    email: string

    @Column({name: 'password'})
    password: string

    @Column({name: 'age'})
    age: number

    @ManyToOne(() => Rol,(rol) => rol.users)
    @JoinColumn({name: 'id_rol'})
    rol: Rol

    @Column({name: 'strikes'})
    strikes: number

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({name: 'created_at',type: 'timestamp without time zone'})
    createdAt: Timestamp

    @UpdateDateColumn({name: 'updated_at',type: 'timestamp without time zone'})
    updatedAt: Timestamp

    @OneToMany(() => Post,(post) => post.user)
    posts: Post[]

    @OneToMany(() => Comment,(comment) => comment.user)
    comments: Comment[]

    @OneToMany(() => Post,(post) => post.user)
    approvals: Post[]

    @OneToMany(() => PostInteraction,(interaction) => interaction.user)
    postInteractions: PostInteraction[]

    @OneToMany(() => PostStar,(postStar) => postStar.user)
    postStars: PostStar[]

    @OneToMany(() => CommentInteraction,(interaction) => interaction.user)
    commentInteractions: CommentInteraction[]

    @OneToMany(() => UserFolder,(folder) => folder.user)
    folders: UserFolder[]

    @OneToMany(() => UserHistory,(history) => history.user)
    histories: UserHistory[]

    @OneToOne(() => ResearcherApplication,(application) => application.user)
    researcherApplication: ResearcherApplication

    @OneToMany(() => PostForum,(forum) => forum.user)
    postForums: PostForum[]

    @OneToMany(() => PostForumMessage,(postForum) => postForum.user)
    postForumMessages: PostForumMessage[]

    @OneToMany(() => Log,(log) => log.user)
    logs: Log[]

    @OneToMany(() => UserDownload,(download) => download.user)
    downloads: UserDownload[]

    @OneToMany(() => SurveysAnswered,(answer) => answer.user)
    surveysAnswered: SurveysAnswered[]
}
