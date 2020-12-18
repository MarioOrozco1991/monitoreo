import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjetivosOperativosService } from './../../../../services/objetivos-operativos.service';
import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-objetivo-operativo',
  templateUrl: './objetivo-operativo.component.html',
  styleUrls: ['./objetivo-operativo.component.scss']
})
export class ObjetivoOperativoComponent implements OnInit {

  locale = 'es';
  objetivosEstrategicos: any[];
  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private bsLocaleService: BsLocaleService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private objetivosOperativosService:ObjetivosOperativosService,
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
   get objetivoEstrategicoInvalido(){
    return this.form.get('idObjetivoEstrategico').invalid && this.form.get('idObjetivoEstrategico').touched
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


  crearFormulario(){
    this.form = this.fb.group({
      id:                     [null,],
      idObjetivoEstrategico:  ['', Validators.required],
      nombre:                 ['', Validators.required],
      fechaInicio:            ['', Validators.required],
      fechaFin:               ['', Validators.required],
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
      this.objetivosOperativosService.crear(form.value).subscribe((data) => {
        // console.log(form.value);
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
      this.router.navigate(['/pages/objetivos-operativos'])
      this.objetivosOperativosService.actualizar(form.value).subscribe((data) => {
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
        this.objetivosOperativosService.get(params.id).subscribe((respuesta: any) => {
          respuesta.fechaInicio = respuesta.fechaInicio ? new Date(respuesta.fechaInicio.substr(0,10).replaceAll("-", "/")) : '';
          respuesta.fechaFin = respuesta.fechaFin ? new Date(respuesta.fechaFin.substr(0,10).replaceAll("-", "/")) : '';
          this.form.patchValue(respuesta);
        });
      }       
    });
  }
  //muestra el nombre del ohjetivo estratégico cuando deseen crear o editar un objetivo operativo
  cargarObjetivoEstrategico(): void {
    this.objetivosEstrategicosService.listado().subscribe((respuesta) => {
      this.objetivosEstrategicos = respuesta;
    });
  }      

}
