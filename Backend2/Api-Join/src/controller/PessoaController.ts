import {createQueryBuilder, getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Pessoa} from "../entity/pessoa";
import { Animal } from "../entity/animal";

export class PessoaController {

    private pessoaRepository = getRepository(Pessoa);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.pessoaRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.pessoaRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.pessoaRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.pessoaRepository.findOne(request.params.id);
        await this.pessoaRepository.remove(userToRemove);
    }

    async myAnimals(request: Request, response: Response, next: NextFunction){
        let a = await this.pessoaRepository.findOne(request.params.id);
        return await createQueryBuilder('pessoa')
        .innerJoinAndSelect('pessoa.animais', 'a')
        .where('pessoa.id = :id', { id: 3 })
        .getMany();
    }


}