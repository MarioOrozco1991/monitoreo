import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'unidad-medida');
  }
  
  crear(datos: any) {
    return this.httpClient.post(this.url + 'unidad-medida', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'unidad-medida/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'unidad-medida/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }

}
