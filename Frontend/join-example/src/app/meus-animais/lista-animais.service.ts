import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../models/animais';
import { Pessoa } from '../models/pessoas';


const API = "http://127.0.0.1:3000"

@Injectable({
  providedIn: 'root'
})
export class ListaAnimaisService {

  constructor(private http: HttpClient) { }

  public pegaPessoas(){
    return this.http.get<Pessoa[]>(API + '/pessoas');
  }

  getMyAnimals(id?: any){
    return this.http.get<Animal[]>(API + '/meusAnimais/' + id);
  }
}
