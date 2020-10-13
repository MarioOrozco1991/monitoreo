import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PoliticasPublicasService } from '../../../services/politicas-publicas.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-politicas-publicas',
  templateUrl: './politicas-publicas.component.html',
  styleUrls: ['./politicas-publicas.component.scss']
})
export class PoliticasPublicasComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  respuesta: any;
  dtTrigger = new Subject();

  constructor(public politicasPublicasService:PoliticasPublicasService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.politicasPublicasService.listado().subscribe((data: any) => {
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
  
        this.politicasPublicasService.eliminar(datos.id).subscribe();
        
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Politica eliminada correctamente',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate['centros-de-costo']
      }
    })

  }  

}
