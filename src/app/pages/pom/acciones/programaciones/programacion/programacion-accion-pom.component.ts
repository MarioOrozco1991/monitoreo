import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramacionesService } from './../../../../../services/programaciones.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-programacion-accion-pom',
  templateUrl: './programacion-accion-pom.component.html',
  styleUrls: ['./programacion-accion-pom.component.scss']
})
export class ProgramacionAccionPomComponent implements OnInit {

  mostrarNombreSistema: boolean = false;
  form: FormGroup;
  formDetalle: FormGroup;
  respuesta: any;
  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public programacionesService:ProgramacionesService, 
              private fb:FormBuilder) {
  
    this.crearFormulario();

  }
      
  ngOnInit(): void {
    this.cargarProgramacion();
  }
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
  
  crearFormulario(){
    //inicializando el formulario
  
    this.form = this.fb.group({
      id:                          [null,],
      accion:                      ['',],
      periodo:                     ['',],
      items: this.fb.array([]),
    });
    this.formDetalle = this.fb.group({
      año:                 ['',],
      cantidadProgramada:  ['',]
    });
  }
  // agregar item
  agregarItem(){
    // this.items.push( this.fb.control('', Validators.required ) );
    console.log('this.formDetalle', this.formDetalle.getRawValue());
    this.items.push(
      this.fb.group(this.formDetalle.getRawValue())
    );
    this.formDetalle.reset();
  }

  editarItem(i: any){
    console.log('i', i, this.items);
    const item = this.items.at(i) as FormGroup
    this.formDetalle.patchValue(item.getRawValue())
  }

  eliminarItem(i: number ){
    console.log('i', i);
    this.items.removeAt(i);
    this.formDetalle.reset();
  }

  cargarProgramacion(): void {
    console.log('desde cargrar programacion');
    this.activatedRoute.params.subscribe(params => {

      if(params.id){
        this.programacionesService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

  public crear(form: any) {
    console.log('formulario',form.value);
    return;
    this.programacionesService.crear(form.value).subscribe((data) => {
      console.log('datos listado', data);
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Programación creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.programacionesService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Programación modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  enviarFormulario(form: any) {
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }
}
