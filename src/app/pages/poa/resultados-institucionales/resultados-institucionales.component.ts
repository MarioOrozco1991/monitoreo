import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 
import { ResultadosInstitucionalesService } from './../../../services/resultados-institucionales.service';

@Component({
  selector: 'ngx-resultados-institucionales',
  templateUrl: './resultados-institucionales.component.html',
  styleUrls: ['./resultados-institucionales.component.scss']
})
export class ResultadosInstitucionalesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  respuesta: any;
  dtTrigger = new Subject();

  constructor(public resultadosInstitucionalesService:ResultadosInstitucionalesService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    }
    //obtener el listado de resultados institucionales
    this.resultadosInstitucionalesService.listado().subscribe((data: any) => {
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
        this.resultadosInstitucionalesService.eliminar(datos.id).subscribe();
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Resultado Institucional eliminado correctamente',
          showConfirmButton: false,
          timer: 2000
        })
      }
    })

  }
}
