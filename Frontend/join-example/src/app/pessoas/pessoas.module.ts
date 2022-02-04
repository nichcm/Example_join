import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { AdicionarPessoasComponent } from './adicionar-pessoas/adicionar-pessoas.component';
import { PessoasComponent } from './pessoas.component';



@NgModule({
  declarations: [
    ListaPessoasComponent,
    AdicionarPessoasComponent,
    PessoasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PessoasComponent
  ]
})
export class PessoasModule { }
