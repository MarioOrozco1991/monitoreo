import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccionesService } from '../../../services/acciones.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.scss']
})
export class AccionComponent implements OnInit {

  mostrarTareas: boolean = false;

  mostrarNombreSistema: boolean = false;

  form: FormGroup;

  constructor(private fb:FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService  
  ) {
  
    this.crearFormulario();
  
  }
      

  ngOnInit(): void {
    this.cargarAccion();
  }
  
  get tareas(){
    return this.form.get('tareas') as FormArray;
  }
  
  
  crearFormulario(){
    //inicializando el formulario

    this.form = this.fb.group({
      id:                    [null,],
      ejeEstrategico:        ['', Validators.required],
      objetivoEstrategico:   ['',],
      objetivoOperativo:     ['',],
      responsable:           ['',],
      accion:                ['',],
      actividad:             ['',],
      dependenciaRealiza:    ['',],
      puestoRealiza:         ['',],
      documentoEntrada:      ['',],
      otroDocumentoEntrada:  ['',],
      dependenciaSolicita:   ['',],
      puestoSolicita:        ['',],
      resultadoDocumento:    ['',],
      otroResultado:         ['',],
      dependenciaRecibe:     ['',],
      puestoRecibe:          ['',],
      unidadTiempo:          ['',],
      duracion:              ['',],
      utilizaSistema:        ['',],
      nombreSistema:         ['',],
      observaciones:         ['',],
      // tareas: this.fb.array([])
    })
  }

  //agregando las tareas
  agregarTarea(){
    this.tareas.push( this.fb.control('', Validators.required ) );

  }

  eliminarTarea(i: number ){
    this.tareas.removeAt(i);
  }

  //metodo cuando el usuario presione click en guardar
  cargarAccion(): void {
    this.activatedRoute.params.subscribe(params => {

      if(params.id){
        this.accionesService.cargar(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

  public crear(form: any) {
    // console.log('agregando', form.value);  
    this.accionesService.crear(form.value).subscribe((data) => {
      // console.log('datos listado', data);
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Acción creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    // console.log('actualizar', form.value);  
    this.accionesService.actualizar(form.value).subscribe((data) => {
      // console.log('datos listado', data);
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Acción modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
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

