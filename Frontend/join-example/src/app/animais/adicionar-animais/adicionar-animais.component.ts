import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component';

@Component({
  selector: 'app-adicionar-animais',
  templateUrl: './adicionar-animais.component.html',
  styleUrls: ['./adicionar-animais.component.css']
})
export class AdicionarAnimaisComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  adicionarAnimal(): void {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '750px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
