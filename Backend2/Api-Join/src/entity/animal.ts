import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Pessoa } from "../entity/pessoa";

@Entity()
export class Animal {

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
    especie: string;

    @Column()
    genero: string;

    @ManyToOne(() => Pessoa, pessoa => pessoa.animais)
    Pessoa: Pessoa;
}