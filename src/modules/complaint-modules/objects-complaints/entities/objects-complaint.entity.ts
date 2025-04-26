import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Complaint } from "../../complaints/entities/complaint.entity";

@Entity('objects_complaint')
export class ObjectsComplaint {
    @PrimaryGeneratedColumn({name: 'id_object'})
    id: number

    @Column({name: 'name'})
    name: string

    @OneToMany(() => Complaint,(complaint) => complaint.objectType)
    complaints: Complaint[]
}
