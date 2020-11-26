import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProgramacionesService } from '../../../../services/programaciones.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-programaciones-metas-poa',
  templateUrl: './programaciones-metas-poa.component.html',
  styleUrls: ['./programaciones-metas-poa.component.scss']
})
export class ProgramacionesMetasPoaComponent implements OnInit {

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
      title: '¡Advertencia!',
      text: '¿Está seguro que desea eliminarla?',
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
