import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EjesService } from './../../../../services/ejes.service';
import { AccionesService } from './../../../../services/acciones.service';
import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';
import { ObjetivosOperativosService } from './../../../../services/objetivos-operativos.service';
import { UnidadMedidaService } from './../../../../services/unidad-medida.service';
import { PoliticasGobiernoService } from './../../../../services/politicas-gobierno.service';
import { PoliticasPublicasService } from './../../../../services/politicas-publicas.service';
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
  listadoPoliticasGobierno: any[];
  listadoPoliticasPublicas: any[];
  listadoUnidadMedida: any[];
  form: FormGroup;
  formDetalle: FormGroup;
  editarDetalleIndice: number = -1;

  constructor(private fb:FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService,
              private ejesService: EjesService,
              private objetivosEstrategicosService: ObjetivosEstrategicosService,  
              private objetivosOperativosService: ObjetivosOperativosService,
              private unidadMedidaService: UnidadMedidaService,
              private politicasGobiernoService: PoliticasGobiernoService,
              private politicasPublicasService: PoliticasPublicasService
  ) {
  
    this.crearFormulario();
  
  }

  ngOnInit(): void {
    this.cargarAccion();
    this.cargarEjeEstrategico();
    this.cargarObjetivoEstrategico();
    this.cargarObjetivoOperativo();
    this.cargarPoliticaGobierno();
    this.cargarPoliticaPublica();
    this.cargarUnidadMedida();
  }
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
  
  crearFormulario(){
    //inicializando el formulario

    this.form = this.fb.group({
      id:                       [null,],
      ejercicioFiscal:          ['',],
      nombreAccion:             ['',],
      idDependencia:            ['',],
      idPuestoResponsable:      ['',],
      idEjeEstrategico:         ['',],
      idObjetivoEstrategico:    ['',],
      idObjetivoOperativo:      ['',],
      idPoliticaGobierno:       ['',],
      idPoliticaPublica:        ['',],
      idUnidadMedida:           ['',],
      nombreIndicador:          ['',],
      interpretacion:           ['',],
      formulaCalculo:           ['',],
      procedenciaDatos:         ['',],
      metodologiaRecopilacion:  ['',],      
      items: this.fb.array([]),
    });

    this.formDetalle = this.fb.group({
      tarea:                   ['',],
      idDependenciaRealiza:    ['',],
      idPuestoRealiza:         ['',],
      entrada:                 ['',],
      idDependenciaSolicita:   ['',],
      idPuestoSolicita:        ['',],
      resultadoDocumento:      ['',],
      idDependenciaResultado:  ['',],
      idPuestoResultado:       ['',],
      externoResultado:        ['',],
      idUnidadTiempo:          ['',],
      duracion:                ['',],
      utilizaSistema:          ['',],
      idSistema:               ['',],
      observaciones:           ['',],
    });
  }

  // agregar o editar item
  agregarEditarItem(){
    // this.items.push( this.fb.control('', Validators.required ) );
    console.log('this.formDetalle', this.formDetalle.getRawValue());
    if (this.editarDetalleIndice === -1) { // crear
      this.items.push(
        this.fb.group(this.formDetalle.getRawValue())
      );
    } else { // editar
      this.items.setControl(
        this.editarDetalleIndice,
        this.fb.group(this.formDetalle.getRawValue())
      );
      this.editarDetalleIndice = -1;
    }
    this.formDetalle.reset();
  }

  editarItem(i: any){
    console.log('i', i, this.items);
    this.editarDetalleIndice = i;
    const item = this.items.at(i) as FormGroup
    this.formDetalle.patchValue(item.getRawValue())
  }

  eliminarItem(i: number ){
    console.log('i', i);
    this.items.removeAt(i);
    this.formDetalle.reset();
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
    this.form.reset();
    this.items.clear();
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
    this.objetivosEstrategicosService.listado().subscribe((respuesta) => {
      this.objetivosEstrategicos = respuesta;
    });   
  }

  public cargarObjetivoOperativo(): void {
    this.objetivosOperativosService.listado().subscribe((respuesta) => {
      this.objetivosOperativos = respuesta;
    });   
  }

  public cargarPoliticaGobierno(): void {
    this.politicasGobiernoService.listado().subscribe((respuesta) => {
      this.listadoPoliticasGobierno = respuesta;  
    });   
  }

  public cargarPoliticaPublica(): void {
    this.politicasPublicasService.listado().subscribe((respuesta) => {
      this.listadoPoliticasPublicas = respuesta;  
    });   
  }

  public cargarUnidadMedida(): void {
    this.unidadMedidaService.listado().subscribe((respuesta) => {
      this.listadoUnidadMedida = respuesta;  
    });   
  }

}

