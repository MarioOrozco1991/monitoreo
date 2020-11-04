import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 
import { CentrosDeCostoService } from './../../../../services/centros-de-costo.service';

@Component({
  selector: 'ngx-centro-de-costo',
  templateUrl: './centro-de-costo.component.html',
  styleUrls: ['./centro-de-costo.component.scss']
})
export class CentroDeCostoComponent implements OnInit {

  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private centrosDeCostoService: CentrosDeCostoService,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:              [null,],
      idDependencia:   ['',],
      nombre:          ['',],
    });
  }
  
  enviarFormulario(form: any) {
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }

  public crear(form: any) {
    this.centrosDeCostoService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Centro de Costo creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.centrosDeCostoService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Centro de Costo modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrar(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.centrosDeCostoService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

}
