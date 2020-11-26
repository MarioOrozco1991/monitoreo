import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ObjetivosEstrategicosService } from './../../../services/objetivos-estrategicos.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-objetivos-estrategicos',
  templateUrl: './objetivos-estrategicos.component.html',
  styleUrls: ['./objetivos-estrategicos.component.scss']
})
export class ObjetivosEstrategicosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  respuesta: any;
  dtTrigger = new Subject();

  constructor(public objetivosEstrategicosService:ObjetivosEstrategicosService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.objetivosEstrategicosService.listado().subscribe((data: any) => {
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
      text: '¿Está seguro que desea eliminarla?',
      icon: 'question',
      // showConfirmButton: true,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => {
      
      if (resp.value) {
        this.respuesta.splice(i, 1)
  
        this.objetivosEstrategicosService.eliminar(datos.id).subscribe();
        
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Objetivo eliminado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate['objetivos-estrategicos']
      }
    })

  }      

}
