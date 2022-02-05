import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../../models/animais'


const API = "http://127.0.0.1:3000"

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient){}

  getAllanimais(){
    return this.http.get<Animal[]>(API + '/animais');
  }

  getAnimalId(id?: any)
    {
        return this.http.get<Animal[]>(API + '/animais/' + id);
    }

    delete(id:any)
  {
      return this.http.delete(API + '/animais/' + id)
  }
}
