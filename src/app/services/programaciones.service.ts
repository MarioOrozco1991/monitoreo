import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramacionesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listadoProgramaciones() {
    return this.httpClient.get<any>(this.url + 'programacion-metas');
  }


  crearProgramacionMetas(datos: any){
    return this.httpClient.post(this.url + 'programacion-metas', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  getProgramacion(id: any){
    return this.httpClient.get(this.url + 'programacion-metas/' + id);
  }




  eliminarProgramacion(id: any){
    return this.httpClient.delete(this.url + 'programacion-metas/' + id);
  }
  

  actualizarProgramacion(datos: any){
    return this.httpClient.put(this.url + 'programacion-metas/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }

}
  