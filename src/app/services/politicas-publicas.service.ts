import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliticasPublicasService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'politica-publica');
  }
  
  crear(datos: any) {
    return this.httpClient.post(this.url + 'politica-publica', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'politica-publica/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'politica-publica/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'politica-publica/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
}
