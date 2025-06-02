import { User } from "src/modules/user-modules/users/entities/user.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm"
import { Event } from "../../events/entities/event.entity"
import { EventForumMessage } from "../../event-forum-messages/entities/event-forum-message.entity"

@Entity('event_forums')
export class EventForum {
    @PrimaryGeneratedColumn({ name: 'id_forum' })
    id: number

    @Column({ name: 'title' })
    title: string

    @Column({ name: 'description' })
    description: string

    @ManyToOne(() => User, (user) => user.postForums)
    @JoinColumn({ name: 'id_user' })
    user: User

    @ManyToOne(() => Event, (event) => event.forums)
    @JoinColumn({ name: 'id_event' })
    event: Event

    @Column({ name: 'is_deleted' })
    isDeleted: boolean

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp

    @OneToMany(() => EventForumMessage,(eventForumMessage) => eventForumMessage.forum)
    messages: EventForumMessage[]
}
