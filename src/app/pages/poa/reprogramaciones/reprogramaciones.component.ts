import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReprogramacionesService } from '../../../services/reprogramaciones.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-reprogramaciones',
  templateUrl: './reprogramaciones.component.html',
  styleUrls: ['./reprogramaciones.component.scss']
})
export class ReprogramacionesComponent implements OnInit {

  datos: any;

  dtOptions: DataTables.Settings = {};
    
  dtTrigger = new Subject();

  respuesta: any;

  constructor(private http:HttpClient, 
              private router:Router,
              public reprogramacionesService:ReprogramacionesService){

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.reprogramacionesService.listado().subscribe((data: any) => {
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
  
        this.reprogramacionesService.eliminar(datos.id).subscribe();

        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Reprogramación eliminada correctamente',
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
