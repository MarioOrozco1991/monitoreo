import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 
import { ResultadosInstitucionalesService } from './../../../../services/resultados-institucionales.service';

@Component({
  selector: 'ngx-resultado-institucional',
  templateUrl: './resultado-institucional.component.html',
  styleUrls: ['./resultado-institucional.component.scss']
})
export class ResultadoInstitucionalComponent implements OnInit {

  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private resultadosInstitucionalesService: ResultadosInstitucionalesService,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
  }

  //validaciones del formulario
  get nombreInvalido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }
  
  //definicion del formulario
  crearFormulario(){
    this.form = this.fb.group({
      id:      [null,],
      nombre:  ['', Validators.required],
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
    if(this.form.status ==='VALID'){
      this.resultadosInstitucionalesService.crear(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Resultado Institucional creado exitosamente',
          showConfirmButton: false,
          timer: 3000
        })
      });
      this.form.reset();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Favor revisar que la información esté ingresada correctamente',
      })  
    }
  }

  public actualizar(form: any) {
    if(this.form.status ==='VALID'){
      this.router.navigate(['/pages/resultados-institucionales'])
      this.resultadosInstitucionalesService.actualizar(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Resultado Institucional modificado exitosamente',
          showConfirmButton: false,
          timer: 3000
        })
      });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Favor revisar que la información esté ingresada correctamente',
      })  
    }
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrar(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.resultadosInstitucionalesService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }
}
