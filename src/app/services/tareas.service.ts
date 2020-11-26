import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) { }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'tareas', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'tareas/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }
  
  eliminar(id: any){
    return this.httpClient.delete(this.url + 'tareas/' + id);
  }
}
