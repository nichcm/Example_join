import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { AnimaisComponent } from './animais.component';
import { AdicionarAnimaisComponent } from './adicionar-animais/adicionar-animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


import { AnimaisService } from './lista-animais/animais.service';
import { FormDialogComponent } from './adicionar-animais/form-dialog/form-dialog.component'


@NgModule({
  declarations: [
    AnimaisComponent,
    AdicionarAnimaisComponent,
    ListaAnimaisComponent,
    FormDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    AnimaisComponent
  ],
  providers: [
    AnimaisService
  ]
})
export class AnimaisModule { }
