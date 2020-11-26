import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ObjetivosOperativosService } from './../../../services/objetivos-operativos.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-objetivos-operativos',
  templateUrl: './objetivos-operativos.component.html',
  styleUrls: ['./objetivos-operativos.component.scss']
})
export class ObjetivosOperativosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  respuesta: any;
  dtTrigger = new Subject();

  constructor(public objetivosOperativosService:ObjetivosOperativosService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.objetivosOperativosService.listado().subscribe((data: any) => {
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

  public eliminarObjetivo(datos: any, i: any) {

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
  
        this.objetivosOperativosService.eliminar(datos.id).subscribe();
        
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Objetivo eliminado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })

  }
}
