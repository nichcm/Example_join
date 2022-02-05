import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdicionaServiceService } from '../adiciona-service.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
  public pessoaForm!: FormGroup
  constructor(
    private fb: FormBuilder,
    private rest: AdicionaServiceService,
    public dialogRef: MatDialogRef<FormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.pessoaForm = this.fb.group({
      nome: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      trabalho: ['', [Validators.required]],
      genero: ['', [Validators.required]]
    })
  }

  criarPessoa(){
    this.rest.postPessoa(this.pessoaForm.value).subscribe(result =>{});
    this.dialogRef.close();
    this.pessoaForm.reset();
    window.location.reload()
  }
  cancelar(): void {
    this.dialogRef.close();
    this.pessoaForm.reset();
  }

}
