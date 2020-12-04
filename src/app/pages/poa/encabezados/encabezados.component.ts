import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EncabezadoService } from './../../../services/encabezado.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.scss']
})
export class EncabezadosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  perfilComponentes: any;  
  respuesta: any;
  dtTrigger = new Subject();

  constructor(private encabezadoService:EncabezadoService,
              private http:HttpClient, 
              private router:Router){
  }
  
  ngOnInit() {
    //convierte el perfilComponentes en un arreglo
    this.perfilComponentes = localStorage.getItem('perfilComponentes') ? JSON.parse(localStorage.getItem('perfilComponentes')) : null;
    console.log('perfilComponentes', this.perfilComponentes);  
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.encabezadoService.listadoEncabezados(parseInt(localStorage.getItem('cui'))).subscribe((data: any) => {
       this.respuesta = data
      this.dtTrigger.next();
    });
  }

  //obtiene las opciones que tiene disponible el usuario logado
  opcionDisponible(nombre: string) {
    if (!this.perfilComponentes) {
      return false;
    }
    return this.perfilComponentes.find((perfilComponente) => perfilComponente.nombre == nombre)
  }

  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }

  editarEncabezado(){
      this.router.navigate(["editar"]);
  }

  // public eliminarEncabezado(datos: any, i: any) {
  //   Swal.fire({
  //     title: '¡Advertencia!',
  //     text: '¿Está seguro que desea eliminarla?',
  //     icon: 'question',
  //     // showConfirmButton: true,
  //     confirmButtonText: `Sí`,
  //     showCancelButton: true,
  //     cancelButtonText: `Cancelar`,
  //   }).then( resp => {
  //     if (resp.value) {
  //       this.respuesta.splice(i, 1)
  //       this.encabezadoService.eliminar(datos.id).subscribe();
  //       Swal.fire({
  //         //position: 'top-end',
  //         icon: 'success',
  //         title: 'Encabezado eliminado correctamente',
  //         showConfirmButton: false,
  //         timer: 2000
  //       })
  //     }
  //   })

  // }
}