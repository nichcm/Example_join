import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimaisComponent } from './animais.component';
import { AdicionarAnimaisComponent } from './adicionar-animais/adicionar-animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';



@NgModule({
  declarations: [
    AnimaisComponent,
    AdicionarAnimaisComponent,
    ListaAnimaisComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnimaisComponent
  ]
})
export class AnimaisModule { }
