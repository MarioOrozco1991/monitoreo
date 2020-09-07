import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoaService {

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listadoProgramaciones() {
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.httpClient.get<any>(this.url + 'programacion-metas');
  }

  listadoAcciones() {
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.httpClient.get<any>(this.url + 'acciones');
  }

  crearProgramacionMetas(forma: any){
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.httpClient.post(this.url + 'programacion-metas', forma.json, {headers: headersRequest});
  }

  eliminarProgramacion(id: any){
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.httpClient.delete(this.url + 'programacion-metas/' + id, {headers: headersRequest});
  }

  actualizarProgramacion(id: any){
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.httpClient.put(this.url + 'programacion-metas/' + id, {headers: headersRequest});
  }


  
  

}
  