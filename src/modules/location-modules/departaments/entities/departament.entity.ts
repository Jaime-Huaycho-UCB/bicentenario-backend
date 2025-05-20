import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "../../cities/entities/city.entity";

@Entity('departaments')
export class Departament {
    @PrimaryGeneratedColumn({name: 'id_departament'})
    id: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'latitude',type: 'float'})
    latitude: number

    @Column({name: 'longitude',type: 'float'})
    longitude: number

    @OneToMany(() => City,(city) => city.departament)
    cities: City[]
}
