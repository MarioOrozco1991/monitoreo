import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { SubproductosService } from './../../../services/subproductos.service';

@Component({
  selector: 'ngx-subproductos',
  templateUrl: './subproductos.component.html',
  styleUrls: ['./subproductos.component.scss']
})
export class SubproductosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  respuesta: any;
  dtTrigger = new Subject();

  constructor(public subproductosService:SubproductosService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.subproductosService.listado().subscribe((data: any) => {
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
        this.subproductosService.eliminar(datos.id).subscribe();
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Subproducto eliminado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate['centros-de-costo']
      }
    })
  }

}
