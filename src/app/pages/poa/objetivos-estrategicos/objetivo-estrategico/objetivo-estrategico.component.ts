import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EjesService } from './../../../../services/ejes.service';
import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-objetivo-estrategico',
  templateUrl: './objetivo-estrategico.component.html',
  styleUrls: ['./objetivo-estrategico.component.scss']
})
export class ObjetivoEstrategicoComponent implements OnInit {

  locale = 'es';
  ejes: any[];
  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private bsLocaleService: BsLocaleService,
               private EjesService:EjesService,
               private activatedRoute: ActivatedRoute,
               private localeService: BsLocaleService,
               private objetivosEstrategicosService:ObjetivosEstrategicosService,
             ) {              
                 this.bsLocaleService.use('es');//fecha en español, datepicker  
                 this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.cargarObjetivoEstrategico();
    this.mostrarObjetivo();
  }
  
  //validaciones del formulario
  get ejeEstrategicoInvalido(){
    return this.form.get('idEjeEstrategico').invalid && this.form.get('idEjeEstrategico').touched
  }

  get nombreInvalido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  get fechaInicioInvalida(){
    return this.form.get('fechaInicio').invalid && this.form.get('fechaInicio').touched
  }

  get fechaFinInvalida(){
    return this.form.get('fechaFin').invalid && this.form.get('fechaFin').touched
  }

  //definicion del formulario reactivo
  crearFormulario(){
    this.form = this.fb.group({
      id:                 [null,],
      idEjeEstrategico:   ['', Validators.required],
      nombre:             ['', Validators.required],
      fechaInicio:        ['', Validators.required],
      fechaFin:           ['', Validators.required],
      estado:             ['']
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
      this.form.get('estado').setValue(1);
      this.objetivosEstrategicosService.crear(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Objetivo creado exitosamente',
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
      this.router.navigate(['/pages/objetivos-estrategicos'])
      this.objetivosEstrategicosService.actualizar(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Objetivo modificado exitosamente',
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
  mostrarObjetivo(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.objetivosEstrategicosService.get(params.id).subscribe((respuesta: any) => {
          console.log('respuesta', respuesta);
          respuesta.fechaInicio = respuesta.fechaInicio ? new Date(respuesta.fechaInicio.substr(0,10).replaceAll("-", "/")) : '';
          respuesta.fechaFin = respuesta.fechaFin ? new Date(respuesta.fechaFin.substr(0,10).replaceAll("-", "/")) : '';        
          this.form.patchValue(respuesta);
        });
      }       
    });
  }
  //muestra el nombre del ohjetivo estratégico cuando deseen crear o editar un objetivo operativo
  cargarObjetivoEstrategico(): void {
    this.EjesService.listado().subscribe((respuesta) => {
      this.ejes = respuesta;
    });
  }



}
