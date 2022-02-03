import "reflect-metadata";
import {createConnection, createQueryBuilder} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";

import {Pessoa} from "./entity/pessoa";
import {Animal} from "./entity/animal";


createConnection().then(async connection => {

    const pessoaRepository = connection.getRepository(Pessoa);
    const animalRepository = connection.getRepository(Animal);
    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // Pessoa

    app.get("/pessoa", async function(req: Request, res: Response) {
        const users = await pessoaRepository.find();
        res.json(users);
    });

    app.get("/pessoa/:id", async function(req: Request, res: Response) {
        const results = await pessoaRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.delete("/pessoa/:id", async function(req: Request, res: Response) {
        const results = await pessoaRepository.delete(req.params.id);
        return res.send(results);
    });

    app.get("/animaisDaPessoa/:id", async function(req: Request, res: Response) {
        const query = createQueryBuilder('pessoa', 'p')
        .innerJoinAndSelect('pessoa.animais', 'animal')
        .where("pessoa.id = :id", { id: `{req.params.id}` })// 'w.userId = u.id' may be omitted
        const result = await query.getMany();
        return res.send(result);
    });




    //Animal

    app.get("/animal", async function(req: Request, res: Response) {
        const users = await animalRepository.find();
        res.json(users);
    });
    app.get("/animal/:id", async function(req: Request, res: Response) {
        const results = await animalRepository.findOne(req.params.id);
        return res.send(results);
    });
    app.delete("/pessoa/:id", async function(req: Request, res: Response) {
        const results = await animalRepository.delete(req.params.id);
        return res.send(results);
    });

    


    



    // start express server
    app.listen(3000);

    console.log("Express server has started on port 3000. Open http://localhost:3000/ to see results");

}).catch(error => console.log(error));
