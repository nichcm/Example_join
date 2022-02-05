import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdicionaService } from "../adiciona.service";
import { Pessoa } from './../../../models/pessoas';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {
  public animalForm!: FormGroup;
  selecionado: number = 0;
  pessoas: Pessoa[] = [];

  constructor(
    private fb: FormBuilder,
    private rest: AdicionaService,
    public dialogRef: MatDialogRef<FormDialogComponent>
  ) { }

  ngOnInit(): void {
    this.animalForm = this.fb.group({
      nome: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      especie: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      pessoaId: ['', [Validators.required]]
    });
    this.rest.pegaPessoas()
    .subscribe((pessoas)=> {
      this.pessoas = pessoas
    });
  }

  criarAnimal(){
    //this.animalForm.value.pessoaId = this.selecionado;
    //console.log(this.animalForm.value);
    this.rest.postAnimal(this.animalForm.value).subscribe(result =>{});
    this.dialogRef.close();
    this.animalForm.reset();
    window.location.reload()
  }

  cancelar(): void {
    this.dialogRef.close();
  }



}
