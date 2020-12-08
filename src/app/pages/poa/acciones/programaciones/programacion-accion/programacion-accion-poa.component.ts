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

  params: any;
  acciones: any[];
  form: FormGroup;
  formDetalle: FormGroup;
  respuesta: any;
  editarDetalleIndice: number = -1;
  locale = 'es';
  //year = new Date().getFullYear();

  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bsLocaleService: BsLocaleService,
              private accionesService: AccionesService,
              public programacionesService:ProgramacionesService, 
              private fb:FormBuilder
             ) {
                  this.bsLocaleService.use('es');//fecha en español, datepicker  
                  this.crearFormulario();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.params = params; 
    })
    this.cargarProgramaciones()
    this.cargarAccion();
  }
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
  
  crearFormulario(){
    //inicializando el formulario
    this.form = this.fb.group({
      id:                 [null,],
      idAccion:           [null,],
      items: this.fb.array([]),
    });
    this.formDetalle = this.fb.group({
      id:               [null,],
      idAccion:         [null,],
      fechaInicio:      ['',],
      fechaFin:         ['',],
      valorProgramado:  ['',]
    });
  }

  // agregar o editar item
  agregarEditarItem(){
    // this.items.push( this.fb.control('', Validators.required ) );
    console.log('this.formDetalle', this.formDetalle.getRawValue());
    if (this.editarDetalleIndice === -1) { // crear
      if(this.params.id){
        this.programacionesService.crear(this.formDetalle.getRawValue()).subscribe((respuesta: any) => {
          this.items.push(
            this.fb.group(respuesta)
          );
          this.formDetalle.reset();
        })
      } else {
        this.items.push(
          this.fb.group(this.formDetalle.getRawValue())
        );
        this.formDetalle.reset();
      }
    } else { // editar
      if(this.params.id){
        console.log('object');
        this.programacionesService.actualizar(this.formDetalle.getRawValue()).subscribe((respuesta: any) => {
          console.log('respuesta', respuesta);
          this.items.setControl(
            this.editarDetalleIndice,
            this.fb.group(respuesta)
          );
          this.editarDetalleIndice = -1;
          this.formDetalle.reset();
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Programación actualizada exitosamente',
            showConfirmButton: false,
            timer: 3000
          })
        })
      } else {
        this.items.setControl(
          this.editarDetalleIndice,
          this.fb.group(this.formDetalle.getRawValue())
        );
        this.editarDetalleIndice = -1;
        this.formDetalle.reset();
      }   
    }
  }
  
  editarItem(i: any){
    //console.log('i', i, this.items);
    this.editarDetalleIndice = i;
    const item = this.items.at(i) as FormGroup
    item.patchValue({
      fechaInicio: item.value.fechaInicio ? new Date(item.value.fechaInicio) : '',
      fechaFin: item.value.fechaFin ? new Date(item.value.fechaFin) : ''    
    })
    this.formDetalle.patchValue(item.getRawValue())
  }

  eliminarItem(i: number ){
    console.log('i', i);
    if(this.params.id){
      const item = this.items.at(i) as FormGroup
      Swal.fire({
        title: '¡Advertencia!',
        text: '¿Está seguro que desea eliminarla?',
        icon: 'question',
        // showConfirmButton: true,
        confirmButtonText: `Sí`,
        showCancelButton: true,
        cancelButtonText: `Cancelar`,
      }).then( resp => {
        if (resp.value) {
          this.programacionesService.eliminar(item.get('id').value).subscribe((respuesta: any) => {
            this.items.removeAt(i);
          })
        }
      })  
    } else {
      this.items.removeAt(i);
    }
    this.formDetalle.reset();
  }

  public cargarAccion(): void {
    this.accionesService.listadoAccionesAprobadas(parseInt(localStorage.getItem('cui'))).subscribe((respuesta) => {
      this.acciones= respuesta;
    });   
  }

  cargarProgramaciones(): void {
    if(this.params.id){
      console.log('desde cargar programaciones');
      this.accionesService.accionConProgramacionesPoa(this.params.id).subscribe((respuesta: any) => {
        console.log('programaciones cargadas', respuesta);
          respuesta.forEach((item) => {
            this.items.push(this.fb.group(item))
          })
      });
    }       
  }
  
  public crear(form: any) {
    console.log('formulario',form.value);
    this.programacionesService.crear(form.value).subscribe((data) => {
      console.log('datos listado', data);
      Swal.fire({
        icon: 'success',
        title: 'Programación creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      });
      this.form.reset();
      this.items.clear();
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
