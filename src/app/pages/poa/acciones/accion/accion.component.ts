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
    this.activatedRoute.params.subscribe(params => {
      this.params = params; 
    })
    this.cargarAccion();
    console.log('identificador', this.params.id);
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
    console.log('form', this.form);
    //this.form.controls['idDependencia'].disable();
  }
  
  get tareas(): FormArray {
    return this.form.get('tareas') as FormArray;
  }
  
  crearFormulario(){
    //inicializando el formulario
    this.form = this.fb.group({
      accion:                     this.fb.group({
        id:                       [null,],
        ejercicioFiscal:          ['',],
        idObjetivoOperativo:      ['',],
        idDependencia:            ['',],
        idPuestoResponsable:      ['',],
        idPoliticaGobierno:       ['',],
        idPoliticaPublica:        ['',],
        nombreAccion:             ['',],
        idUnidadMedida:           ['',],
      }), 
      indicador:                  this.fb.group({
        id:                       [null,],
        idAccion:                 [null,],
        nombreIndicador:          ['',],
        interpretacion:           ['',],
        formulaCalculo:           ['',],
        procedenciaDatos:         ['',],
        metodologiaRecopilacion:  ['',],  
      }),
      tareas: this.fb.array([]),
    });
    this.formDetalle = this.fb.group({
      id:                      [null,],
      idAccion:                [null,],
      tarea:                   ['',],
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
    this.form.get('accion.idDependencia').setValue(this.dependenciaUsuario.id)
    console.log('formulario antes de crear', form, this.dependenciaUsuario);
    //return;
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

