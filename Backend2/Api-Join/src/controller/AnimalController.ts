import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Animal} from "../entity/animal";

export class AnimalController {

    private animalRepository = getRepository(Animal);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.animalRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.animalRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        try {
            return await this.animalRepository.save(request.body)
            .catch(erro => {throw erro});
        } catch (error) {
            console.log(error)
        }
        
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.animalRepository.findOne(request.params.id);
        await this.animalRepository.remove(userToRemove);
    }

}