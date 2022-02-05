import { Component, OnInit } from '@angular/core';
import { ListaPessoaService} from './lista-pessoa.service'
import { Pessoa } from '../../models/pessoas'


@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  columnsToDisplay: string[] = ['id','nome', 'idade', 'trabalho', 'genero', 'deletar'];
  pessoas: Pessoa[]= [];

  constructor( private ListaPessoaService:  ListaPessoaService) { }

  ngOnInit(): void {
    this.ListaPessoaService
      .getAllpessoas()
      .subscribe((pessoas)=> {
        this.pessoas = pessoas
      });
  }

  deletaPessoa(id:number): void {
    this.ListaPessoaService
      .deletePessoa(id)
      .subscribe(()=>{
        window.location.reload()
      })

  }

}
