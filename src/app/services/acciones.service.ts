import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'acciones');
  }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'acciones', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  cargarAccion(id: any){
    return this.httpClient.get(this.url + 'acciones/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'acciones/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'acciones/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }

}
