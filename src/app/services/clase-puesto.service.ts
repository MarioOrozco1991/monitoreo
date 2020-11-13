import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClasePuestoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  get(cui: number){
    return this.httpClient.get<any>(this.url + 'clase-puestos/cui/' + cui);
  }

  puestoPorUnidad(id: number){
    return this.httpClient.get<any>(this.url + 'clase-puestos/unidad/' + id);
  }

  listado(){
    return this.httpClient.get<any>(this.url + 'clase-puestos');
  }
  


}
