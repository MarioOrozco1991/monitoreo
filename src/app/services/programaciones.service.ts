import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listadoProgramaciones() {
    return this.httpClient.get<any>(this.url + 'programacion-metas');
  }


  crearProgramacionMetas(forma: any){
    return this.httpClient.post(this.url + 'programacion-metas', forma.json, {headers: this.httpHeaders});
  }


  eliminarProgramacion(id: any){
    return this.httpClient.delete(this.url + 'programacion-metas/' + id);
  }
  

  actualizarProgramacion(id: any){
    let headersRequest = new HttpHeaders({ 'Content-Type': 'application/json'});
    headersRequest = headersRequest.append('Accept', 'application/json');
    return this.httpClient.put(this.url + 'programacion-metas/' + id, {headers: headersRequest});
  }

}
  