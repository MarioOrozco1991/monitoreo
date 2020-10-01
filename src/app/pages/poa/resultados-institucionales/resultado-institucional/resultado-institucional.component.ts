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
  
  crearFormulario(){
    this.form = this.fb.group({
      id:                     [null,],
      nombre:                 ['',],
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
    this.resultadosInstitucionalesService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Resultado Institucional creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.resultadosInstitucionalesService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Resultado Institucional modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
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
