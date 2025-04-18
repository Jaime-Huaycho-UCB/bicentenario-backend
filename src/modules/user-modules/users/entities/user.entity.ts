import { PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, Timestamp, Entity, OneToMany } from "typeorm"
import { Rol } from "../../rols/entities/rol.entity"
import { Post } from "src/modules/post-modules/posts/entities/post.entity"

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

    @ManyToOne(() => Rol,(rol) => rol.users)
    @JoinColumn({name: 'id_rol'})
    rol: Rol

    @Column({name: 'is_deleted'})
    isDeleted: boolean

    @CreateDateColumn({name: 'created_at',type: 'timestamp without time zone'})
    createdAt: Timestamp

    @UpdateDateColumn({name: 'updated_at',type: 'timestamp without time zone'})
    updatedAt: Timestamp

    @OneToMany(() => Post,(post) => post.user)
    posts: Post[]

    // @OneToMany(() => CommentEntity,(comment) => comment.user)
    // comments: CommentEntity[]

    @OneToMany(() => Post,(post) => post.user)
    approvals: Post[]
}
