import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Animal } from "../entity/animal";

@Entity()
export class Pessoa {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        length: 100
    })
    nome: string;
    
    @Column("int")
    idade: number;
    
    @Column({
        length: 100
    })
    trabalho: string;

    @Column()
    genero: string;


    @OneToMany(() => Animal, animal => animal.Pessoa)
    animais: Animal[];
}