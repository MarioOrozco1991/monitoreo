import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EjesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listadoEjeEstrategico() {
    return this.httpClient.get<any>(this.url + 'eje-estrategico');
  }

  listadoObjetivoEstrategico() {
    return this.httpClient.get<any>(this.url + 'objetivo-estrategico');
  }

  listadoObjetivoOperativo() {
    return this.httpClient.get<any>(this.url + 'objetivo-operativo');
  }

}
