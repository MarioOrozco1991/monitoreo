import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EjesService } from './../../../../services/ejes.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-eje',
  templateUrl: './eje.component.html',
  styleUrls: ['./eje.component.scss']
})
export class EjeComponent implements OnInit {

  locale = 'es';
  respuesta: any;
  form: FormGroup;
  

  constructor( private fb:FormBuilder,
               private router: Router,
               private bsLocaleService: BsLocaleService,
               private activatedRoute: ActivatedRoute,
               private ejesService: EjesService
             ) {
                  this.bsLocaleService.use('es');//fecha en español, datepicker          
                  this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrarEje();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:           [null,],
      nombre:       ['',],
      descripcion:  ['',],
      fechaInicio:  ['',],
      fechaFin:     ['',],
      fechaPrueba:  [','],
    })
  }

  enviarFormulario(form: any) {
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }

  public crear(form: any) {
    console.log('formulario', form);  
    this.ejesService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Eje creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.ejesService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Eje modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrarEje(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.ejesService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

}
