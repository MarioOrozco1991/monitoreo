import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { PoliticasGobiernoService } from './../../../services/politicas-gobierno.service';

@Component({
  selector: 'ngx-politicas-gobierno',
  templateUrl: './politicas-gobierno.component.html',
  styleUrls: ['./politicas-gobierno.component.scss']
})
export class PoliticasGobiernoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  respuesta: any;
  dtTrigger = new Subject();

  constructor(public politicasGobiernoService:PoliticasGobiernoService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.politicasGobiernoService.listado().subscribe((data: any) => {
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
      text: '¿Está seguro que desea eliminarla?',
      icon: 'question',
      // showConfirmButton: true,
      confirmButtonText: `Sí`,
      showCancelButton: true,
      cancelButtonText: `Cancelar`,
    }).then( resp => {
      
      if (resp.value) {
        this.respuesta.splice(i, 1)
  
        this.politicasGobiernoService.eliminar(datos.id).subscribe();
        
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
