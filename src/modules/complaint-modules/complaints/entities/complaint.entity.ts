import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { ObjectsComplaint } from "../../objects-complaints/entities/objects-complaint.entity";
import { ComplaintStatus } from "../../complaint-statuses/entities/complaint-status.entity";
import { any } from "joi";

@Entity('complaints')
export class Complaint {
    @PrimaryGeneratedColumn({ name: 'id_complaint' })
    id: number

    @Column({ name: 'title' })
    title: string

    @Column({ name: 'report' })
    report: string

    @Column({name: 'id_object'})
    object: number

    @ManyToOne(() => ObjectsComplaint, (object) => object.complaints)
    @JoinColumn({ name: 'id_object_type' })
    objectType: ObjectsComplaint

    @ManyToOne(() => ComplaintStatus, (status) => status.complaints)
    @JoinColumn({ name: 'id_status' })
    status: ComplaintStatus

    @Column({ name: 'is_revised' })
    isRevised: boolean

    @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
    createdAt: Timestamp
}
