import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PoliticasGobiernoService } from './../../../../services/politicas-gobierno.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-politica-gobierno',
  templateUrl: './politica-gobierno.component.html',
  styleUrls: ['./politica-gobierno.component.scss']
})
export class PoliticaGobiernoComponent implements OnInit {

  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private politicasGobiernoService: PoliticasGobiernoService,) {
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
      estado:  ['',]
    });
  }
  
  //recibe el formulario
  enviarFormulario(form: any) {
    //si no trae id quiere decir que no es actualizacion y se va al método crear
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }
  
  //crear el registro
  public crear(form: any) {
    if(this.form.status ==='VALID'){
      this.form.get('estado').setValue(1);
      this.politicasGobiernoService.crear(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Política creada exitosamente',
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
  
  //modificar el registro
  public actualizar(form: any) {
    if(this.form.status ==='VALID'){
      this.router.navigate(['/pages/politicas-gobierno'])
      this.politicasGobiernoService.actualizar(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Política modificada exitosamente',
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
        this.politicasGobiernoService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }
}
