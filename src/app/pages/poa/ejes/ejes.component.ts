import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EjesService } from './../../../services/ejes.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-ejes',
  templateUrl: './ejes.component.html',
  styleUrls: ['./ejes.component.scss']
})
export class EjesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
    
  respuesta: any;

  dtTrigger = new Subject();

  constructor(public ejesService:EjesService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.ejesService.listado().subscribe((data: any) => {
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
      title: 'Está seguro?',
      text: 'Esta seguro que desea eliminarlo',
      icon: 'question',
      // showConfirmButton: true,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => { 
      if (resp.value) {
        this.respuesta.splice(i, 1)
        this.ejesService.eliminar(datos.id).subscribe();
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Eje eliminado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })

  }
}
