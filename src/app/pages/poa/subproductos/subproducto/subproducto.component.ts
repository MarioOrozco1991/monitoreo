import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 
import { SubproductosService } from './../../../../services/subproductos.service';

@Component({
  selector: 'ngx-subproducto',
  templateUrl: './subproducto.component.html',
  styleUrls: ['./subproducto.component.scss']
})
export class SubproductoComponent implements OnInit {

  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private subproductosService: SubproductosService,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:                         [null,],
      idResultadoInstitucional:   ['',],
      nombre:                     ['',],
      idUnidadMedida:             ['',],
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
    this.subproductosService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Subproducto creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.subproductosService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Subproducto modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrar(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.subproductosService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

}
