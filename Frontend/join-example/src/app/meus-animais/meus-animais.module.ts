import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMeusAnimaisComponent } from './lista-meus-animais/lista-meus-animais.component';
import { MeusAnimaisComponent } from './meus-animais.component';

import { SelecionaPessoaComponent } from './seleciona-pessoa/seleciona-pessoa.component';



@NgModule({
  declarations: [
    ListaMeusAnimaisComponent,
    MeusAnimaisComponent,
    SelecionaPessoaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MeusAnimaisComponent
  ]
})
export class MeusAnimaisModule { }
