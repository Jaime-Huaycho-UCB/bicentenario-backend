import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('complaint_statuses')
export class ComplaintStatus {
    @PrimaryGeneratedColumn({name: 'id_status'})
    id: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'description'})
    description: string
}
