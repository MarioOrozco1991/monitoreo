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
    return this.httpClient.get<any>(this.url + 'programaciones');
  }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'programaciones', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'programaciones/' + id);
  }

  eliminar(id: any) {
    return this.httpClient.delete(this.url + 'programaciones/' + id);
  }
  
  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'programaciones/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
}
  