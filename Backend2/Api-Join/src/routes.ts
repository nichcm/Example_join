import { PessoaController } from "./controller/PessoaController";
import { AnimalController } from "./controller/AnimalController";

export const Routes = [{
    method: "get",
    route: "/pessoas",
    controller: PessoaController,
    action: "all"
}, {
    method: "get",
    route: "/pessoas/:id",
    controller: PessoaController,
    action: "one"
}, {
    method: "post",
    route: "/pessoas",
    controller: PessoaController,
    action: "save"
}, {
    method: "delete",
    route: "/pessoas/:id",
    controller: PessoaController,
    action: "remove"
}, {
    method: "get",
    route: "/meusAnimais/:id",
    controller: PessoaController,
    action: "myAnimals"
},{
    method: "get",
    route: "/animais",
    controller: AnimalController,
    action: "all"
}, {
    method: "get",
    route: "/animais/:id",
    controller: AnimalController,
    action: "one"
}, {
    method: "post",
    route: "/animais",
    controller: AnimalController,
    action: "save"
}, {
    method: "delete",
    route: "/animais/:id",
    controller: AnimalController,
    action: "remove"
}];