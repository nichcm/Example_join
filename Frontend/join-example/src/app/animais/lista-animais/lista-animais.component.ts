import { Component, OnInit } from '@angular/core';
import { Animal } from '../../models/animais'
import { AnimaisService } from './animais.service'

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  columnsToDisplay: string[] = ['id','nome', 'idade', 'especie', 'genero'];
  animais: Animal[]= [];

  constructor( private AnimaisService:  AnimaisService) { }

  ngOnInit(): void {
    this.AnimaisService
      .getAllanimais()
      .subscribe((animais)=> {
        this.animais = animais
      });
    }

}
