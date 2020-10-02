import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PoliticaAsociadaService } from './../../../../services/politica-asociada.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-politica-asociada',
  templateUrl: './politica-asociada.component.html',
  styleUrls: ['./politica-asociada.component.scss']
})
export class PoliticaAsociadaComponent implements OnInit {

  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private politicaAsociadaService: PoliticaAsociadaService,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:                         [null,],
      idDependenciaResponsable:   ['',],
      nombre:                     ['',],
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
    this.politicaAsociadaService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Política creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.politicaAsociadaService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Política modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrar(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.politicaAsociadaService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

}
