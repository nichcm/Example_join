import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from '../../models/pessoas'

const API = "http://127.0.0.1:3000"

@Injectable({
  providedIn: 'root'
})
export class ListaPessoaService {

  constructor(private http: HttpClient){}


  getAllpessoas(){
    return this.http.get<Pessoa[]>(API + '/pessoas');
  }

  getPessoaId(id?: any)
    {
        return this.http.get<Pessoa[]>(API + '/pessoas/' + id);
    }

  deletePessoa(id:any)
  {
      return this.http.get(API + '/pessoas/' + id)
  }




}
