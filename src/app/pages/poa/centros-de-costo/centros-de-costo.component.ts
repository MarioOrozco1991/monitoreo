import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CentrosDeCostoService } from './../../../services/centros-de-costo.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-centros-de-costo',
  templateUrl: './centros-de-costo.component.html',
  styleUrls: ['./centros-de-costo.component.scss']
})
export class CentrosDeCostoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  respuesta: any;
  dtTrigger = new Subject();

  constructor(public centrosDeCostoService:CentrosDeCostoService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.centrosDeCostoService.listado().subscribe((data: any) => {
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

  public eliminar(datos: any, i: any) {
    Swal.fire({
      title: '¡Advertencia!',
      text: '¿Está seguro que desea eliminarlo?',
      icon: 'question',
      // showConfirmButton: true,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => {
      
      if (resp.value) {
        this.respuesta.splice(i, 1)
  
        this.centrosDeCostoService.eliminar(datos.id).subscribe();
        
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Centro de Costo eliminado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate['centros-de-costo']
      }
    })

  }  

}
