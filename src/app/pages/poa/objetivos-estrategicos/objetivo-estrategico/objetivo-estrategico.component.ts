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
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  crearFormulario(){
    this.form = this.fb.group({
      id:                 [null,],
      idEjeEstrategico:   ['',],
      nombre:             ['',],
      fechaInicio:        ['',],
      fechaFin:           ['',],
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
    this.objetivosEstrategicosService.crear(form.value).subscribe((data) => {
      console.log('respuesta del servicio', data);
      Swal.fire({
        icon: 'success',
        title: 'Objetivo creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
    this.form.reset();
  }

  public actualizar(form: any) {
    this.objetivosEstrategicosService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Objetivo modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrarObjetivo(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.objetivosEstrategicosService.get(params.id).subscribe((respuesta) => {
          //console.log('respuesta', respuesta);
          this.form.patchValue(respuesta);
          this.respuesta.fechaInicio
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
