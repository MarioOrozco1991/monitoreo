import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EjesService } from './../../../../services/ejes.service';
import { AccionesService } from './../../../../services/acciones.service';
import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';
import { ObjetivosOperativosService } from './../../../../services/objetivos-operativos.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.scss']
})
export class AccionComponent implements OnInit {

  ejesEstrategicos: any[];
  objetivosEstrategicos: any[];
  objetivosOperativos: any[];
  mostrarNombreSistema: boolean = false;
  form: FormGroup;

  constructor(private fb:FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService,
              private ejesService: EjesService,
              private bjetivosEstrategicosService: ObjetivosEstrategicosService,  
              private objetivosOperativosService: ObjetivosOperativosService
  ) {
  
    this.crearFormulario();
  
  }

  ngOnInit(): void {
    this.cargarAccion();
    this.cargarEjeEstrategico();
    this.cargarObjetivoEstrategico();
    this.cargarObjetivoOperativo();
  }
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
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
      items: this.fb.array([ this.crearItem() ]),
    })
  }

  crearItem(): FormGroup {
    return this.fb.group({
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
    })
  }

  // agregar item
  agregarItem(){
    // this.items.push( this.fb.control('', Validators.required ) );
    this.items.push(this.crearItem());
  }

  eliminarItem(i: number ){
    this.items.removeAt(i);
  }

  cargarAccion(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.accionesService.cargar(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
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
    this.accionesService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Acción creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
    this.router.navigate(['..']);
  }

  public actualizar(form: any) {
    this.accionesService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Acción modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
    });
  }

  public cargarEjeEstrategico(): void {
    this.ejesService.listado().subscribe((respuesta) => {
      this.ejesEstrategicos = respuesta;
    });   
  }

  public cargarObjetivoEstrategico(): void {
    this.bjetivosEstrategicosService.listado().subscribe((respuesta) => {
      this.objetivosEstrategicos = respuesta;
    });   
  }

  public cargarObjetivoOperativo(): void {
    this.objetivosOperativosService.listado().subscribe((respuesta) => {
      this.objetivosOperativos = respuesta;
    });   
  }

  

}

