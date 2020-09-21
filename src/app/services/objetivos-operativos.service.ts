import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ObjetivosOperativosService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}

  listado() {
    return this.httpClient.get<any>(this.url + 'objetivo-operativo');
  }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'objetivo-operativo', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'objetivo-operativo/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'objetivo-operativo/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'objetivo-operativo/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }

}
