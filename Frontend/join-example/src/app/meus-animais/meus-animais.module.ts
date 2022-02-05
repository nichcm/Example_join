import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import { ListaMeusAnimaisComponent } from './lista-meus-animais/lista-meus-animais.component';
import { MeusAnimaisComponent } from './meus-animais.component';

@NgModule({
  declarations: [
    ListaMeusAnimaisComponent,
    MeusAnimaisComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    MeusAnimaisComponent
  ]
})
export class MeusAnimaisModule { }
