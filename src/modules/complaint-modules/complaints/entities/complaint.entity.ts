import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('complaints')
export class Complaint {
    @PrimaryGeneratedColumn({name: 'id_complaint'})
    id: number
    
    @Column({name: 'title'})
    title: string

    @Column({name: 'report'})
    report; string

    
}
