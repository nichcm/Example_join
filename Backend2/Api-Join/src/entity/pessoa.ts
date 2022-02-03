import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Animal } from "../models/animal";

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


    @OneToMany(() => Animal, animal => animal.pessoa)
    animais: Animal[];
}