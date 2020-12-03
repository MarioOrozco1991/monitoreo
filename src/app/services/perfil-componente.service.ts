import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilComponenteService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) { }

  getPerfilComponentes(cui: number){
    return this.httpClient.get<any>(this.url + 'perfil-componentes/cui/' + cui);
  }
}
