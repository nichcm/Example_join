import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from "../../models/animais";
import { Pessoa } from "../../models/pessoas";


const API = "http://127.0.0.1:3000"

@Injectable({
  providedIn: 'root'
})
export class AdicionaService {

  httpClient: any;

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public pegaPessoas(){
    return this.http.get<Pessoa[]>(API + '/pessoas');
  }

  public postAnimal(Animal: Animal){
    return this.http.post(API + '/animais', Animal)
  }
}
