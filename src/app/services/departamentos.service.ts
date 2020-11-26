import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  get(cui: number){
    return this.httpClient.get<any>(this.url + 'departamentos/cui/' + cui);
  }

  deptoPorDependencia(id: number){
    return this.httpClient.get<any>(this.url + 'departamentos/departamento/' + id);
  }

  listado(){
    return this.httpClient.get<any>(this.url + 'departamentos');
  }
  


}
