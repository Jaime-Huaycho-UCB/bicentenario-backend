import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('researcher_applications')
export class ResearcherApplication {
    @PrimaryGeneratedColumn({name: 'id_application'})
    id: number

    @OneToOne(() => User,(user) => user.researcherApplication)
    @JoinColumn({name: 'id_user'})
    user: User

    @Column({name: 'status'})
    status: number

    @Column({name: 'justification'})
    justification: string

    @CreateDateColumn({name: 'created_at',type: 'timestamp without time zone'})
    createdAt: Timestamp
}
