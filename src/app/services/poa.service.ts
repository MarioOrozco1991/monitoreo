import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoaService {

  apiURLProgramaciones:string = 'http://localhost:8081/api/programacion-metas';

  apiURLListadoAcciones:string = 'http://localhost:8081/api/acciones';



  constructor(private http: HttpClient) {}
  
  listadoProgramaciones() {
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.http.get<any>(this.apiURLProgramaciones);
  }

  listadoAcciones() {
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.http.get<any>(this.apiURLListadoAcciones);
  }

  

}
  