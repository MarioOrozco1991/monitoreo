import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DependenciaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado(){
    return this.httpClient.get<any>(this.url + 'dependencias');
  }
  
  get(cui: number){
    return this.httpClient.get<any>(this.url + 'dependencias/cui/' + cui);
  }
    

  
}
