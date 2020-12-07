import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});

  url:string = 'http://localhost:8081/api/';

  constructor(private httpClient: HttpClient) {}
  
  listado() {
    return this.httpClient.get<any>(this.url + 'acciones');
  }

  listadoAccionesAprobadas() {
    return this.httpClient.get<any>(this.url + 'acciones/aprobadas');
  }

  listadoAccionesPorDependencia(cui: number) {
    return this.httpClient.get<any>(this.url + 'acciones/dependencia/' + cui);
  }

  listadoAccionesConProgramacionesPoa(cui: number) {
    return this.httpClient.get<any>(this.url + 'acciones/programaciones/poa/' + cui);
  }

  listadoAccionesConProgramacionesPom(cui: number) {
    return this.httpClient.get<any>(this.url + 'acciones/programaciones/pom/' + cui);
  }
  
  //obtiene todas las programaciones de la accion incluyendo mensual y anual
  accionConProgramaciones(id: number) {
    return this.httpClient.get<any>(this.url + 'acciones/' + id + '/programaciones');
  }

  //obtiene todas las programaciones de la accion que solo sean mensuales (POA)
  accionConProgramacionesPoa(id: number) {
    return this.httpClient.get<any>(this.url + 'acciones/' + id + '/programaciones/poa');
  }

  //obtiene todas las programaciones de la accion que solo sean mensuales (POM)
  accionConProgramacionesPom(id: number) {
    return this.httpClient.get<any>(this.url + 'acciones/' + id + '/programaciones/pom');
  }

  crear(datos: any) {
    return this.httpClient.post(this.url + 'acciones', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  enviarRevisionAccion(id: number) {
    return this.httpClient.put(this.url + 'acciones/' + id + '/revision', null, {headers: this.httpHeaders});
  }

  validarAccion(id: number) {
    return this.httpClient.put(this.url + 'acciones/' + id + '/validar', null, {headers: this.httpHeaders});
  }

  aprobarAccion(id: number) {
    return this.httpClient.put(this.url + 'acciones/' + id + '/aprobar', null, {headers: this.httpHeaders});
  }

  rechazarAccion(datos: any) {
    return this.httpClient.put(this.url + 'acciones/' + datos.id + '/rechazar', JSON.stringify(datos), {headers: this.httpHeaders});
  }

  inactivarAccion(id: number) {
    return this.httpClient.put(this.url + 'acciones/' + id + '/inactivo', null, {headers: this.httpHeaders});
  }

  cargarAccion(id: any){
    return this.httpClient.get(this.url + 'acciones/' + id);
  }

  eliminar(id: any){
    return this.httpClient.delete(this.url + 'acciones/' + id);
  }

  eliminarTarea(id: any){
    return this.httpClient.delete(this.url + 'tareas/' + id);
  }

  actualizar(datos: any) {
    return this.httpClient.put(this.url + 'acciones/' + datos.accion.id, JSON.stringify(datos), {headers: this.httpHeaders});
  }


}
