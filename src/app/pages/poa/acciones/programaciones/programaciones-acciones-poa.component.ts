import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccionesService } from './../../../../services/acciones.service';
import { ProgramacionesService } from '../../../../services/programaciones.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-programaciones-acciones-poa',
  templateUrl: './programaciones-acciones-poa.component.html',
  styleUrls: ['./programaciones-acciones-poa.component.scss']
})
export class ProgramacionesAccionesPoaComponent implements OnInit {

  datos: any;
  perfilComponentes: any; 
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  respuesta: any;

  constructor(private http:HttpClient, 
              private router:Router,
              private accionesService: AccionesService,
              private programacionesService:ProgramacionesService){

  }

  ngOnInit() {
    //convierte el perfilComponentes en un arreglo
    this.perfilComponentes = localStorage.getItem('perfilComponentes') ? JSON.parse(localStorage.getItem('perfilComponentes')) : null;
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.accionesService.listadoAccionesConProgramacionesPoa(parseInt(localStorage.getItem('cui'))).subscribe((data: any) => {
      console.log('datos listado', data);
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

  // public eliminar(datos: any, i: any) {
  //   Swal.fire({
  //     title: '¡Advertencia!',
  //     text: '¿Está seguro que desea eliminarla?',
  //     icon: 'question',
  //     confirmButtonText: `Sí`,
  //     showCancelButton: true,
  //     cancelButtonText: `Cancelar`,
  //   }).then( resp => {
  //     if (resp.value) {
  //       console.log('click eliminar');
  //       this.respuesta.splice(i, 1)
  //       this.programacionesService.eliminar(datos.id).subscribe();
  //       Swal.fire({
  //         //position: 'top-end',
  //         icon: 'success',
  //         title: 'Programación eliminada correctamente',
  //         showConfirmButton: false,
  //         timer: 2000
  //       })
  //     }
  //   })
  // }
  
  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }
}
