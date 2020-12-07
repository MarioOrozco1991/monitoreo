import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultadosInstitucionalesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'resultado-institucional');
  }
  
  crear(datos: any) {
    return this.httpClient.post(this.url + 'resultado-institucional', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'resultado-institucional/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'resultado-institucional/' + id);
  }

  InactivarResultado(id: any){
    return this.httpClient.delete(this.url + 'resultado-institucional/inactivo/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'resultado-institucional/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
}
