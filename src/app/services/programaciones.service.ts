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
  
  listado() {
    return this.httpClient.get<any>(this.url + 'programacion-metas');
  }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'programacion-metas', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'programacion-metas/' + id);
  }

  eliminar(id: any) {
    return this.httpClient.delete(this.url + 'programacion-metas/' + id);
  }
  
  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'programacion-metas/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
}
  