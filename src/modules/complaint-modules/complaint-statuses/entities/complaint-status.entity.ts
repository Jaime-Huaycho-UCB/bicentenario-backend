import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Complaint } from "../../complaints/entities/complaint.entity";

@Entity('complaint_statuses')
export class ComplaintStatus {
    @PrimaryGeneratedColumn({name: 'id_status'})
    id: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'description'})
    description: string

    @OneToMany(() => Complaint,(complaint) => complaint.status)
    complaints: Complaint[]
}
