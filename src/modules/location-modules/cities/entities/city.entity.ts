import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Departament } from "../../departaments/entities/departament.entity";
import { Post } from "src/modules/post-modules/posts/entities/post.entity";

@Entity('cities')
export class City {
    @PrimaryGeneratedColumn({name: 'id_city'})
    id: number

    @Column({name: 'name'})
    name: string

    @Column({name: 'latitude',type: 'float'})
    latitude: number

    @Column({name: 'longitude',type: 'float'})
    longitude: number

    @ManyToOne(() => Departament,(departament) => departament.cities)
    @JoinColumn({name: 'id_departament'})
    departament: Departament

    @OneToMany(() => Post,(post) => post.city)
    posts: Post[]
}
