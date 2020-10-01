import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoliticasGobiernoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'politicas-gobierno');
  }
  
  crear(datos: any) {
    return this.httpClient.post(this.url + 'politicas-gobierno', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'politicas-gobierno/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'politicas-gobierno/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'politicas-gobierno/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
}
