import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccionesService} from './../../../../../services/acciones.service'
import { ProgramacionesService } from './../../../../../services/programaciones.service';
import { BsDatepickerConfig, BsDatepickerViewMode, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-programacion-acciones',
  templateUrl: './programacion-accion-poa.component.html',
  styleUrls: ['./programacion-accion-poa.component.scss']
})
export class ProgramacionAccionPoaComponent implements OnInit {

  acciones: any[];
  form: FormGroup;
  formDetalle: FormGroup;
  respuesta: any;
  year = new Date().getFullYear();
  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService,
              public programacionesService:ProgramacionesService, 
              private fb:FormBuilder) {
  

    this.crearFormulario();
  }

  ngOnInit(): void {
    this.cargarProgramacion();
    this.cargarAccion();
  }
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
  
  crearFormulario(){
    //inicializando el formulario
    this.form = this.fb.group({
      id:                 [null,],
      ejercicioFiscal:    [null,],
      accion:             ['',],
      items: this.fb.array([]),
    });
    this.formDetalle = this.fb.group({
      periodo:            [this.year,],
      mes:                ['',],
      valorProgramacion:  ['',]
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

  public cargarAccion(): void {
    this.accionesService.listado().subscribe((respuesta) => {
      this.acciones= respuesta;
    });   
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
    console.log(form.value);
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
