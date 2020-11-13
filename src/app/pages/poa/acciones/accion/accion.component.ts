import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import { EjesService } from './../../../../services/ejes.service';
//import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';
import { AccionesService } from './../../../../services/acciones.service';
import { ObjetivosOperativosService } from './../../../../services/objetivos-operativos.service';
import { DependenciaService } from './../../../../services/dependencia.service';
import { ClasePuestoService } from './../../../../services/clase-puesto.service';
import { PoliticasGobiernoService } from './../../../../services/politicas-gobierno.service';
import { PoliticasPublicasService } from './../../../../services/politicas-publicas.service';
import { UnidadMedidaService } from './../../../../services/unidad-medida.service';
import { SistemasService } from './../../../../services/sistemas.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.scss']
})
export class AccionComponent implements OnInit {

  //ejesEstrategicos: any[];
  //objetivosEstrategicos: any[];
  objetivosOperativos: any[];
  dependencia: any = {};
  dependencias: any[];
  clasePuestoUnidad: any[];
  clasePuestos: any[];
  clasePuestoListado: any[];
  mostrarNombreSistema: boolean = false;
  listadoPoliticasGobierno: any[];
  listadoPoliticasPublicas: any[];
  listadoUnidadMedida: any[];
  sistemas: any[];
  form: FormGroup;
  formDetalle: FormGroup;
  editarDetalleIndice: number = -1;
  year = new Date().getFullYear();
  
  constructor(private fb:FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService,
              //private ejesService: EjesService,
              //private objetivosEstrategicosService: ObjetivosEstrategicosService,  
              private objetivosOperativosService: ObjetivosOperativosService,
              private dependenciaService: DependenciaService,
              private clasePuestoService: ClasePuestoService,
              private politicasGobiernoService: PoliticasGobiernoService,
              private politicasPublicasService: PoliticasPublicasService,
              private unidadMedidaService: UnidadMedidaService,
              private sistemasService: SistemasService
  ) {
      this.crearFormulario();
    }

  ngOnInit(): void {
    this.cargarAccion();
    //this.cargarEjeEstrategico();
    //this.cargarObjetivoEstrategico();
    this.cargarObjetivoOperativo();
    this.cargarDependencia();
    this.cargarDependencias();
    this.cargarPoliticaGobierno();
    this.cargarPoliticaPublica();
    this.cargarUnidadMedida();
    this.cargarClasePuesto();
    this.cargarClasePuestoListado();
    this.cargarSistemas();
    console.log('form', this.form);
    //this.form.controls['idDependencia'].disable();
  }
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
  
  crearFormulario(){
    //inicializando el formulario

    this.form = this.fb.group({
      id:                       [null,],
      ejercicioFiscal:          ['',],
      idObjetivoOperativo:      ['',],
      idDependencia:            ['',],
      idPuestoResponsable:      ['',],
      idPoliticaGobierno:       ['',],
      idPoliticaPublica:        ['',],
      nombreAccion:             ['',],
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
        this.accionesService.cargarAccion(params.id).subscribe((respuesta) => {
          console.log('accion cargada', respuesta);
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
    this.form.controls['idDependencia'].setValue(this.dependencia.id);
    console.log('formulario antes de crear', form);
    return;
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

  // public cargarEjeEstrategico(): void {
  //   this.ejesService.listado().subscribe((respuesta) => {
  //     this.ejesEstrategicos = respuesta;
  //   });   
  // }

  // public cargarObjetivoEstrategico(): void {
  //   this.objetivosEstrategicosService.listado().subscribe((respuesta) => {
  //     this.objetivosEstrategicos = respuesta;
  //   });   
  // }

  public cargarObjetivoOperativo(): void {
    this.objetivosOperativosService.listado().subscribe((respuesta) => {
      this.objetivosOperativos = respuesta;
    });   
  }

  public cargarDependencia(): void {
    this.dependenciaService.get(parseInt(localStorage.getItem('cui'))).subscribe((respuesta) => {
      this.dependencia = respuesta;
      console.log('respuesta', this.dependencia);
        //this.form.idDepenencia.setValue(this.dependencia.id);
    });   
  }

  public cargarDependencias(): void {
    this.dependenciaService.listado().subscribe((respuesta) => {
      this.dependencias = respuesta;
    });   
  }

  public cargarClasePuesto(): void {
    this.clasePuestoService.get(parseInt(localStorage.getItem('cui'))).subscribe((respuesta) => {
      this.clasePuestos = respuesta;
    });   
  }

    //para obtener que dependencia seleccionó el usuario en el select obtengo el valor desde html
    //con change() y le paso el valor.
    public clasePuestoPorUnidad(valor: number): void {
      this.clasePuestoService.puestoPorUnidad(valor).subscribe((respuesta) => {
        this.clasePuestoUnidad = respuesta;
        console.log('respuesta', this.dependencia);
          //this.form.idDepenencia.setValue(this.dependencia.id);
      });   
    }

  public cargarClasePuestoListado(): void {
    this.clasePuestoService.listado().subscribe((respuesta) => {
      this.clasePuestoListado = respuesta;
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

  public cargarSistemas(): void {
    this.sistemasService.listado().subscribe((respuesta) => {
      this.sistemas = respuesta;  
    });   
  }

}

