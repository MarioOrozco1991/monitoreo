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
    
  respuesta: any;

  dtTrigger = new Subject();

  constructor(public accionesService:AccionesService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.accionesService.listado().subscribe((data: any) => {
       this.respuesta = data
      this.dtTrigger.next();
    });

  }

  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }

  editarProceso(){
      this.router.navigate(["editar"]);
  }

  public eliminarAccion(datos: any, i: any) {

    Swal.fire({
      title: 'Está seguro?',
      text: 'Esta seguro que desea eliminarla',
      icon: 'question',
      // showConfirmButton: true,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => {
      
      if (resp.value) {
        this.respuesta.splice(i, 1)
  
        this.accionesService.eliminar(datos.id).subscribe();
        
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Acción eliminada correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })

  }

}