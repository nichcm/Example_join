import { Component, OnInit } from '@angular/core';
import { ListaAnimaisService } from './../lista-animais.service';
import { Pessoa } from './../../models/pessoas';
import { Animal } from './../../models/animais';
@Component({
  selector: 'app-lista-meus-animais',
  templateUrl: './lista-meus-animais.component.html',
  styleUrls: ['./lista-meus-animais.component.css']
})
export class ListaMeusAnimaisComponent implements OnInit {

  columnsToDisplay: string[] = ['nome', 'idade', 'especie', 'genero'];
  animais: Animal[]=[];
  pessoas: Pessoa[]=[];
  selecionado: number = 2;

  constructor(private ListaAnimaisService: ListaAnimaisService) { }

  ngOnInit(): void {
    this.ListaAnimaisService
    .pegaPessoas()
    .subscribe((pessoas)=> {
      this.pessoas = pessoas
    });
    this.ListaAnimaisService.getMyAnimals(this.selecionado)
      .subscribe((animais) =>{
        this.animais = animais
        console.log(animais)
      })
  }



  meusAnimais(): void{
    this.ListaAnimaisService
      .getMyAnimals(this.selecionado)
      .subscribe((animais) =>{
        this.animais = animais
      })

  }

}
