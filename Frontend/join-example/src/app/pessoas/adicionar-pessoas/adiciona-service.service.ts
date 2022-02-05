import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pessoa } from '../../models/pessoas'
import { Observable } from 'rxjs';

const API = "http://127.0.0.1:3000"
@Injectable({
  providedIn: 'root'
})
export class AdicionaServiceService {
  httpClient: any;

  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public postPessoa(Pessoa: Pessoa){
    return this.http.post(API + '/pessoas', Pessoa)
  }

}
