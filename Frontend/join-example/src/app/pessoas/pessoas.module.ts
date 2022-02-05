import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { AdicionarPessoasComponent } from './adicionar-pessoas/adicionar-pessoas.component';
import { PessoasComponent } from './pessoas.component';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';





import { ListaPessoaService } from './lista-pessoas/lista-pessoa.service';
import { FormDialogComponent } from './adicionar-pessoas/form-dialog/form-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaPessoasComponent,
    AdicionarPessoasComponent,
    PessoasComponent,
    FormDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    PessoasComponent
  ],
  providers: [
    ListaPessoaService
  ]
})
export class PessoasModule { }
