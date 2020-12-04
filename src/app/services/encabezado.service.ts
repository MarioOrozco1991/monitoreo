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
    return this.httpClient.post(this.url + 'encabezados', JSON.stringify(datos), {headers: this.httpHeaders});
  }
  
  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'encabezados/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }

  cargarEncabezado(id: any){
    return this.httpClient.get(this.url + 'encabezados/' + id);
  }

  // eliminar(id: any) {
  //   return this.httpClient.delete(this.url + 'encabezados/' + id);
  // }

  listadoEncabezados(cui: number) {
    return this.httpClient.get<any>(this.url + 'encabezados/dependencia/' + cui);
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

  listadoActividades(id: number) {
    return this.httpClient.get<any>(this.url + 'actividades/actividad/' + id);
  }

  listadoProductos(id: number) {
    return this.httpClient.get<any>(this.url + 'productos/producto/' + id);
  }

  listadoSubproductos(id: number) {
    return this.httpClient.get<any>(this.url + 'subproductos/subproducto/' + id);
  }



  
}
