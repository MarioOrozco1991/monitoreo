import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PoliticasPublicasService } from '../../../../services/politicas-publicas.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-politica-publica',
  templateUrl: './politica-publica.component.html',
  styleUrls: ['./politica-publica.component.scss']
})
export class PoliticaPublicaComponent implements OnInit {

  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private politicasPublicasService: PoliticasPublicasService,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:                         [null,],
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
    this.politicasPublicasService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Política creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.politicasPublicasService.actualizar(form.value).subscribe((data) => {
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
        this.politicasPublicasService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

}
