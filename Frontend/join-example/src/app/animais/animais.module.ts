import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { AnimaisComponent } from './animais.component';
import { AdicionarAnimaisComponent } from './adicionar-animais/adicionar-animais.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';


import { AnimaisService } from './lista-animais/animais.service';
import { FormDialogComponent } from './adicionar-animais/form-dialog/form-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    AnimaisComponent
  ],
  providers: [
    AnimaisService
  ]
})
export class AnimaisModule { }
