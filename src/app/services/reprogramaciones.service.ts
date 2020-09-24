import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReprogramacionesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'reprogramaciones');
  }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'reprogramaciones', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'reprogramaciones' + id);
  }

  eliminar(id: any) {
    return this.httpClient.delete(this.url + 'reprogramaciones/' + id);
  }
  
  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'reprogramaciones/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
}