import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { EventForum } from "../../event-forums/entities/event-forum.entity";
import { User } from "src/modules/user-modules/users/entities/user.entity";

@Entity('event_forum_messages')
export class EventForumMessage {
    @PrimaryGeneratedColumn({ name: 'id_message' })
    id: number

    @ManyToOne(() => EventForum, (forum) => forum.messages)
    @JoinColumn({ name: 'id_forum' })
    forum: EventForum

    @ManyToOne(() => User, (user) => user.postForumMessages)
    @JoinColumn({ name: 'id_user' })
    user: User

    @Column({ name: 'content' })
    content: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp
}
