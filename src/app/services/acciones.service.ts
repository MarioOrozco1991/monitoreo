import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  

  listadoAcciones() {
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.httpClient.get<any>(this.url + 'acciones');
  }

  eliminarAccion(id: any){
    return this.httpClient.delete(this.url + 'acciones/' + id);
  }

 


}
