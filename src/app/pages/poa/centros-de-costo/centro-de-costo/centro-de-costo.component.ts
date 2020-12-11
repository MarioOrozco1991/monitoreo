import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 
import { CentrosDeCostoService } from './../../../../services/centros-de-costo.service';
import { DependenciaService } from './../../../../services/dependencia.service';
@Component({
  selector: 'ngx-centro-de-costo',
  templateUrl: './centro-de-costo.component.html',
  styleUrls: ['./centro-de-costo.component.scss']
})
export class CentroDeCostoComponent implements OnInit {

  respuesta: any;
  form: FormGroup;
  dependencias: any[];

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private centrosDeCostoService: CentrosDeCostoService,
               private dependenciaService: DependenciaService  ) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
    this.cargarDependencias();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:              [null,],
      idDependencia:   ['',],
      nombre:          ['',],
      estado:          ['']
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
    this.form.get('estado').setValue(1);
    this.centrosDeCostoService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Centro de Costo creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
    this.form.reset();
  }

  public cargarDependencias(): void {
    this.dependenciaService.listado().subscribe((respuesta) => {
      this.dependencias = respuesta;
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
