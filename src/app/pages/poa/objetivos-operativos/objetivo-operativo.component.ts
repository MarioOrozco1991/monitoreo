import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjetivosOperativosService } from './../../../services/objetivos-operativos.service';
import { ObjetivosEstrategicosService } from './../../../services/objetivos-estrategicos.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-objetivo-operativo',
  templateUrl: './objetivo-operativo.component.html',
  styleUrls: ['./objetivo-operativo.component.scss']
})
export class ObjetivoOperativoComponent implements OnInit {

  objetivosEstrategicos: any[];
  respuesta: any;
  form: FormGroup;

  constructor( private fb:FormBuilder,
               public objetivosOperativosService:ObjetivosOperativosService,
               public objetivosEstrategicosService:ObjetivosEstrategicosService,
               private router: Router,
               private activatedRoute: ActivatedRoute,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.cargarObjetivoEstrategico();
    this.mostrarObjetivo();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:                     [null,],
      descripcion:            ['',],
      idObjetivoEstrategico:  ['',],
    })
  }
  
  enviarFormulario(form: any) {
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }

  public crear(form: any) {
    this.objetivosOperativosService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Objetivo creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
    this.router.navigate(['..']);
  }

  public actualizar(form: any) {
    console.log('desde actualizar');
    this.objetivosOperativosService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Acción modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrarObjetivo(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.objetivosOperativosService.get(params.id).subscribe((respuesta) => {
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
