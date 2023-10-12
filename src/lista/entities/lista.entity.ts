import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'lista'})
export class Lista {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    @Column()
    apellido:string;

    @Column()
    nacionalidad:string;

}
