import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  crear(datos: any) {
    return this.httpClient.post(this.url + 'encabezado', JSON.stringify(datos), {headers: this.httpHeaders});
  }
  
  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'encabezado/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }

  listadoProgramas() {
    return this.httpClient.get<any>(this.url + 'programas');
  }
  
  listadoSubrogramas() {
    return this.httpClient.get<any>(this.url + 'subprogramas');
  }

  listadoResultadoInstitucional() {
    return this.httpClient.get<any>(this.url + 'resultado-institucional');
  }

  listadoActividades() {
    return this.httpClient.get<any>(this.url + 'actividades');
  }

  listadoProductos() {
    return this.httpClient.get<any>(this.url + 'productos');
  }

  listadoSubproductos() {
    return this.httpClient.get<any>(this.url + 'subproductos');
  }

  
}
