import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';


@Component({
  selector: 'app-adicionar-pessoas',
  templateUrl: './adicionar-pessoas.component.html',
  styleUrls: ['./adicionar-pessoas.component.css']
})
export class AdicionarPessoasComponent implements OnInit {



  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void{
  }

  adicionarPessoa(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      minWidth: '400px',
      maxWidth:'70vm',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
