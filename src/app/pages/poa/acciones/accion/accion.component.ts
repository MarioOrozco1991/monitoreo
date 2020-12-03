import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import { EjesService } from './../../../../services/ejes.service';
//import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';
import { AccionesService } from './../../../../services/acciones.service';
import { TareasService } from './../../../../services/tareas.service';
import { ObjetivosOperativosService } from './../../../../services/objetivos-operativos.service';
import { DependenciaService } from './../../../../services/dependencia.service';
import { DepartamentosService } from './../../../../services/departamentos.service';
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
  params: any;
  perfilComponentes: any;
  objetivosOperativos: any[];
  dependenciaUsuario: any = {};
  dependencias: any[];
  departamentosUsuario: any[];
  departamentoSolicita: any[];
  departamentoRecibe: any[];
  mostrarNombreSistema: boolean = false;
  listadoPoliticasGobierno: any[];
  listadoPoliticasPublicas: any[];
  listadoUnidadMedida: any[];
  sistemas: any[];
  form: FormGroup;
  formDetalle: FormGroup;
  editarDetalleIndice: number = -1;
  year = new Date().getFullYear();
  campoObservaciones: boolean = false;
  
  constructor(private fb:FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService,
              private tareasService: TareasService,
              //private ejesService: EjesService,
              //private objetivosEstrategicosService: ObjetivosEstrategicosService,  
              private objetivosOperativosService: ObjetivosOperativosService,
              private dependenciaService: DependenciaService,
              private departamentosService: DepartamentosService,
              private politicasGobiernoService: PoliticasGobiernoService,
              private politicasPublicasService: PoliticasPublicasService,
              private unidadMedidaService: UnidadMedidaService,
              private sistemasService: SistemasService
  ) {
      this.crearFormulario();
    }

  ngOnInit(): void {
    this.perfilComponentes = localStorage.getItem('perfilComponentes') ? JSON.parse(localStorage.getItem('perfilComponentes')) : null;
    this.activatedRoute.params.subscribe(params => {
      this.params = params; 
    });
    //para deshabilitar el formulario cuando el usuario le de click en el boton editar
    // if (!this.opcionDisponible('Editar accion')) {
    //   this.form.disable();
    // }
    this.cargarAccion();
    //console.log('identificador', this.params.id);
    //this.cargarEjeEstrategico();
    //this.cargarObjetivoEstrategico();
    this.cargarObjetivoOperativo();
    this.cargarDependencia();
    this.cargarDependencias();
    this.cargarPoliticaGobierno();
    this.cargarPoliticaPublica();
    this.cargarUnidadMedida();
    this.cargarDepartamentos();
    this.cargarSistemas();
    //console.log('form', this.form);
    //this.form.controls['idDependencia'].disable();
  }
  
  opcionDisponible(nombre: string) {
    if (!this.perfilComponentes) {
      return false;
    }
    return this.perfilComponentes.find((perfilComponente) => perfilComponente.nombre == nombre)
  }

  get tareas(): FormArray {
    return this.form.get('tareas') as FormArray;
  }

  //validaciones del formulario
  get ejercicioFiscalInvalido(){
    return this.form.get('accion.ejercicioFiscal').invalid && this.form.get('accion.ejercicioFiscal').touched
  }

  get objetivoOperativolInvalido(){
    return this.form.get('accion.idObjetivoOperativo').invalid && this.form.get('accion.idObjetivoOperativo').touched
  }

  get puestoResponsableInvalido(){
    return this.form.get('accion.idPuestoResponsable').invalid && this.form.get('accion.idPuestoResponsable').touched
  }
  
  get politicaPublicaInvalido(){
    return this.form.get('accion.idPoliticaPublica').invalid && this.form.get('accion.idPoliticaPublica').touched
  }

  get nombreAccionInvalido(){
    return this.form.get('accion.nombreAccion').invalid && this.form.get('accion.nombreAccion').touched
  }

  get idUnidadMedidaInvalido(){
    return this.form.get('accion.idUnidadMedida').invalid && this.form.get('accion.idUnidadMedida').touched
  }

  get nombreIndicadorInvalido(){
    return this.form.get('indicador.nombreIndicador').invalid && this.form.get('indicador.nombreIndicador').touched
  }

  get interpretacionInvalido(){
    return this.form.get('indicador.interpretacion').invalid && this.form.get('indicador.interpretacion').touched
  }

  get formulaCalculoInvalido(){
    return this.form.get('indicador.formulaCalculo').invalid && this.form.get('indicador.formulaCalculo').touched
  }

  get procedenciaDatosInvalido(){
    return this.form.get('indicador.procedenciaDatos').invalid && this.form.get('indicador.procedenciaDatos').touched
  }

  get metodologiaRecopilacionInvalido(){
    return this.form.get('indicador.metodologiaRecopilacion').invalid && this.form.get('indicador.metodologiaRecopilacion').touched
  }

  get tareaInvalido(){
    return this.formDetalle.get('tarea').invalid && this.formDetalle.get('tarea').touched
  }

  get entradaInvalido(){
    return this.formDetalle.get('entrada').invalid && this.formDetalle.get('entrada').touched
  }

  // get dependenciaSolicitaInvalido(){
  //   return this.formDetalle.get('idDependenciaSolicita').invalid && this.formDetalle.get('idDependenciaSolicita').touched
  // }

  // get puestoSolicitaInvalido(){
  //   return this.formDetalle.get('idPuestoSolicita').invalid && this.formDetalle.get('idPuestoSolicita').touched
  // }

  get resultadoDocumentoInvalido(){
    return this.formDetalle.get('resultadoDocumento').invalid && this.formDetalle.get('resultadoDocumento').touched
  }

  // get dependenciaResultadoInvalido(){
  //   return this.formDetalle.get('idDependenciaResultado').invalid && this.formDetalle.get('idDependenciaResultado').touched
  // }

  // get puestoResultadoInvalido(){
  //   return this.formDetalle.get('idPuestoResultado').invalid && this.formDetalle.get('idPuestoResultado').touched
  // }

  // get unidadTiempoInvalido(){
  //   return this.formDetalle.get('idUnidadTiempo').invalid && this.formDetalle.get('idUnidadTiempo').touched
  // }

  // get duracionInvalido(){
  //   return this.formDetalle.get('duracion').invalid && this.formDetalle.get('duracion').touched
  // }

  crearFormulario(){
    //inicializando el formulario
    this.form = this.fb.group({
      accion:                     this.fb.group({
        id:                       [null,],
        ejercicioFiscal:          ['', Validators.required],
        idObjetivoOperativo:      ['', Validators.required],
        idDependencia:            [''],
        idPuestoResponsable:      ['', Validators.required],
        idPoliticaGobierno:       ['',],
        idPoliticaPublica:        ['', Validators.required],
        nombreAccion:             ['', Validators.required],
        idUnidadMedida:           ['', Validators.required],
        observaciones:            ['',],
        idEstado:                 ['',],
      }), 
      indicador:                  this.fb.group({
        id:                       [null,],
        idAccion:                 [null,],
        nombreIndicador:          ['', Validators.required],
        interpretacion:           ['', Validators.required],
        formulaCalculo:           ['', Validators.required] ,
        procedenciaDatos:         ['', Validators.required],
        metodologiaRecopilacion:  ['', Validators.required],  
      }),
      tareas: this.fb.array([]),
    });
    this.formDetalle = this.fb.group({
      id:                      [null,],
      idAccion:                [null,],
      tarea:                   ['', Validators.required],
      entrada:                 ['', Validators.required],
      idDependenciaSolicita:   ['',],
      idPuestoSolicita:        ['',],
      resultadoDocumento:      ['', Validators.required],
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
    // this.tareas.push( this.fb.control('', Validators.required ) );
    console.log('this.formDetalle', this.formDetalle.getRawValue());
    if (this.editarDetalleIndice === -1) { // crear tarea
      if(this.params.id){
        this.formDetalle.patchValue({'idAccion': this.params.id});
        this.tareasService.crear(this.formDetalle.getRawValue()).subscribe((respuesta: any) => {
          this.tareas.push(
            this.fb.group(respuesta)
          );
          this.formDetalle.reset();
        })
      } else {
        this.tareas.push(
          this.fb.group(this.formDetalle.getRawValue())
        );
        this.formDetalle.reset();
      }
    } else { // editar
      if(this.params.id){
        console.log('object');
        this.tareasService.actualizar(this.formDetalle.getRawValue()).subscribe((respuesta: any) => {
          this.tareas.setControl(
            this.editarDetalleIndice,
            this.fb.group(this.formDetalle.getRawValue())
          );
          this.editarDetalleIndice = -1;
          this.formDetalle.reset();
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Tarea actualizada exitosamente',
            showConfirmButton: false,
            timer: 3000
          })
        })
      } else {
        this.tareas.setControl(
          this.editarDetalleIndice,
          this.fb.group(this.formDetalle.getRawValue())
        );
        this.editarDetalleIndice = -1;
        this.formDetalle.reset();
      }
    }
  }

  editarItem(i: any){
    console.log('i', i, this.tareas);
    this.editarDetalleIndice = i;
    const item = this.tareas.at(i) as FormGroup
    this.formDetalle.patchValue(item.getRawValue())
  }

  eliminarItem(i: number ){
    console.log('i', i);
    if(this.params.id){
      const item = this.tareas.at(i) as FormGroup
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
          this.tareasService.eliminar(item.get('id').value).subscribe((respuesta: any) => {
            this.tareas.removeAt(i);
          })
        }
      })  
    } else {
      this.tareas.removeAt(i);
    }
    this.formDetalle.reset();
  }

  cargarAccion(): void {
    if(this.params.id){
      this.accionesService.cargarAccion(this.params.id).subscribe((respuesta: any) => {
        console.log('accion cargada', respuesta);
        this.form.patchValue(respuesta);
        if (respuesta.tareas) {
          respuesta.tareas.forEach((item) => {
            this.tareas.push(this.fb.group(item))
          })
        }
      });
    }       
  }

  enviarFormulario(form: any) {
    if (!this.params.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }
  
  public crear(form: any) {
   // this.form.controls['idDependencia'].setValue(this.dependencia.id);
    this.form.get('accion.idDependencia').setValue(this.dependenciaUsuario.id);
    this.form.get('accion.idEstado').setValue(1);
    //console.log('formulario antes de crear', form, this.dependenciaUsuario);
    this.accionesService.crear(form.value).subscribe((data) => {
      
      Swal.fire({
        icon: 'success',
        title: 'Acción creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      });
      this.form.reset();
      this.tareas.clear();
    });
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

  validarAccion() {
    this.accionesService.validarAccion(this.form.get('accion').value.id).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Acción validada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
    });
  }

  aprobarAccion() {
    console.log(this.form.get('accion').value);
    this.accionesService.aprobarAccion(this.form.get('accion').value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Acción aprobada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
    });
  }

  rechazarAccion() {
    console.log(this.form.get('accion').value);
    this.accionesService.rechazarAccion(this.form.get('accion').value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Acción rechazada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
    });
  }

  mostrarCampoObservaciones() {
    this.campoObservaciones = !this.campoObservaciones;
  }

  mostrarObservaciones() {
    return this.form.get('accion').get('observaciones').value || this.campoObservaciones;
  }

  mostrarBotonesRevision() {
    return this.form.get('accion').get('id').value && this.opcionDisponible('Revisar accion');
  }

  bloquearObservaciones(){
    if(this.opcionDisponible('Crear nueva accion')) {
      return true;
    }
    else {
      return false;
    }
  }

  validarOAprobar() {
    return this.opcionDisponible('Aprobar accion') ? 'Aprobar' : 'Validar';
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
  
  //método para obtener la dependencia del usuario logado
  public cargarDependencia(): void {
    this.dependenciaService.get(parseInt(localStorage.getItem('cui'))).subscribe((respuesta) => {
      this.dependenciaUsuario = respuesta;
      console.log('respuesta', this.dependenciaUsuario);
        //this.form.idDepenencia.setValue(this.dependencia.id);
    });   
  }
  
  //método para obteber el listado general de las dependencias
  public cargarDependencias(): void {
    this.dependenciaService.listado().subscribe((respuesta) => {
      this.dependencias = respuesta;
    });   
  }

  //obtener los departamentos de la dependencia a la que el usuario logado pertenece
  public cargarDepartamentos(): void {
    this.departamentosService.get(parseInt(localStorage.getItem('cui'))).subscribe((respuesta) => {
      this.departamentosUsuario = respuesta;
    });   
  }

    /*para obtener que dependencia seleccionó el usuario en el select obtengo el valor desde html
      con change() y le paso el valor.*/
    public listadodepartamentosSolicita(valor: number): void {
      this.departamentosService.deptoPorDependencia(valor).subscribe((respuesta) => {
        this.departamentoSolicita = respuesta;
      });   
    }

    public listadodepartamentoRecibe(valor: number): void {
      this.departamentosService.deptoPorDependencia(valor).subscribe((respuesta) => {
        this.departamentoRecibe = respuesta;
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

