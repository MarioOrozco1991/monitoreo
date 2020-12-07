import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccionesService } from '../../../services/acciones.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-acciones',
  templateUrl: './acciones.component.html',
})
export class AccionesComponent implements OnDestroy, OnInit{

  
  dtOptions: DataTables.Settings = {};
  perfilComponentes: any;  
  respuesta: any;
  dtTrigger = new Subject();

  constructor(private accionesService:AccionesService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    //convierte el perfilComponentes en un arreglo
    this.perfilComponentes = localStorage.getItem('perfilComponentes') ? JSON.parse(localStorage.getItem('perfilComponentes')) : null;
    //console.log('perfilComponentes', this.perfilComponentes);  
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.accionesService.listado().subscribe((data: any) => {
       this.respuesta = data
      this.dtTrigger.next();
    });
  }

  //obtiene las opciones que tiene disponible el usuario logado
  opcionDisponible(nombre: string) {
    if (!this.perfilComponentes) {
      return false;
    }
    return this.perfilComponentes.find((perfilComponente) => perfilComponente.nombre == nombre)
  }

  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }

  editarAccion(){
      this.router.navigate(["editar"]);
  }

  public eliminarAccion(datos: any, i: any) {
    Swal.fire({
      title: '¡Advertencia!',
      text: '¿Está seguro que desea eliminarla?',
      icon: 'question',
      // showConfirmButton: true,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => {
      if (resp.value) {
        this.respuesta.splice(i, 1)
        this.accionesService.inactivarAccion(datos.id).subscribe((respuesta: any) => {  
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Acción eliminada correctamente',
            showConfirmButton: false,
            timer: 2000
          })
        })
      }
    })
  }

  public enviarRevisionAccion(datos: any, i: any) {
    Swal.fire({
      title: '¡Advertencia!',
      text: '¿Está seguro que desea enviarla a revision?',
      icon: 'question',
      // showConfirmButton: true,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => {
      if (resp.value) {
        this.respuesta.splice(i, 1)
        this.accionesService.enviarRevisionAccion(datos.id).subscribe((respuesta: any) => {  
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'La acción fue enviada para revisión',
            showConfirmButton: false,
            timer: 2000
          });
      })
      }
    })
  }
}