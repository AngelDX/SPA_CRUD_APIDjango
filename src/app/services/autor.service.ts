import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Autor } from '../models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  
  autorList: Array<Autor> = [];
  selectAutor: Autor=new Autor();

  API_URL = 'http://127.0.0.1:8000/api';

  constructor(private httpClient: HttpClient) { }

  getAutores(){
    return this.httpClient.get(`${this.API_URL}/autores/`);
  }

  insertAutor(objeto){
    return this.httpClient.post(`${this.API_URL}/autores/`,objeto);
  }

  updateAutor(id,objeto){
    return this.httpClient.put(`${this.API_URL}/autores/${id}/`,objeto);
  }
  
  deleteAutor(id){
    return this.httpClient.delete(`${this.API_URL}/autores/${id}/`);
  }
}
