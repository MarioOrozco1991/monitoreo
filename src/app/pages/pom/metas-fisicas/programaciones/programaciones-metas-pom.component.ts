import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProgramacionesService } from '../../../../services/programaciones.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-programaciones-metas-pom',
  templateUrl: './programaciones-metas-pom.component.html',
  styleUrls: ['./programaciones-metas-pom.component.scss']
})
export class ProgramacionesMetasPomComponent implements OnInit {

  datos: any;

  dtOptions: DataTables.Settings = {};
    
  dtTrigger = new Subject();

  respuesta: any;

  constructor(private http:HttpClient, 
              private router:Router,
              public programacionesService:ProgramacionesService){

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.programacionesService.listado().subscribe((data: any) => {
      console.log('datos listado', data);
       this.respuesta = data
      this.dtTrigger.next();
    });
  }

  public eliminar(datos: any, i: any) {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Esta seguro que desea eliminarla',
      icon: 'question',
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => {
      if (resp.value) {
        console.log('click eliminar');
        this.respuesta.splice(i, 1)
  
        this.programacionesService.eliminar(datos.id).subscribe();

        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Programación eliminada correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })
  }
  
  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }

}
