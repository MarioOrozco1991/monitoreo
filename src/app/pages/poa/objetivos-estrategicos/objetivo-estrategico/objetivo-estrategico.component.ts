import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EjesService } from './../../../../services/ejes.service';
import Swal from 'sweetalert2'; 
import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';


@Component({
  selector: 'ngx-objetivo-estrategico',
  templateUrl: './objetivo-estrategico.component.html',
  styleUrls: ['./objetivo-estrategico.component.scss']
})
export class ObjetivoEstrategicoComponent implements OnInit {

  ejes: any[];
  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               public EjesService:EjesService,
               public objetivosEstrategicosService:ObjetivosEstrategicosService,
               private router: Router,
               private activatedRoute: ActivatedRoute,) {
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
      nombre:             ['',]
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
    console.log('antes de llegar al servicio', form.value);
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
