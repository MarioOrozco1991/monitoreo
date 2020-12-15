import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjetivosEstrategicosService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}

  listado() {
    return this.httpClient.get<any>(this.url + 'objetivo-estrategico');
  }

  //muestra el eje estrategico segun el objetivo operativo seleccionado
  mostarObjetivoEstrategico(id: any) {
    return this.httpClient.get<any>(this.url + 'objetivo-estrategico/' + id + '/objetivo-operativo');
  }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'objetivo-estrategico', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  get(id: any){
    return this.httpClient.get(this.url + 'objetivo-estrategico/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'objetivo-estrategico/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'objetivo-estrategico/' + datos.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }

}
