import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentrosDeCostoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'centros-de-costo');
  }
  
  crear(datos: any) {
    return this.httpClient.post(this.url + 'centros-de-costo', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'centros-de-costo/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'centros-de-costo/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'centros-de-costo/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
}
