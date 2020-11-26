import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EncabezadoService } from '../../../services/encabezado.service';
import { DependenciaService } from './../../../services/dependencia.service';
import { DepartamentosService } from './../../../services/departamentos.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-crear-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  params: any;
  dependenciaUsuario: any = {};
  departamentosUsuario: any[];
  programas: any[]; 
  subprogramas: any[];
  actividades: any[]; 
  productos: any[]; 
  subproductos: any[];
  resultadoInstitucional: any[];
  formDetalle: FormGroup;
  year = new Date().getFullYear();
  editarDetalleIndice: number = -1;

  form: FormGroup;

  constructor( private fb:FormBuilder,
               private encabezadoService:EncabezadoService,
               private dependenciaService: DependenciaService,
               private departamentosService: DepartamentosService,
               private router: Router,
               private activatedRoute: ActivatedRoute
  ) {
      this.crearFormulario();
  }  
      
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.params = params; 
    })
    this.cargarDependencia();
    this.cargarDepartamentos();
    this.cargarPrograma(); //preguntar de que forma se podria reducir este codigo para que no mande a llamar a todas la funciones cuando carga la app
    this.cargarResultadoInstitucional();
  }
    
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  crearFormulario(){
    
    this.form = this.fb.group({
      id:                         [null,],
      idDependencia:              ['',],
      idUnidad:                   ['',],
      idProgramaPresupuestario:   ['',],
      idResultadoInstitucional:   ['',],
      periodoFiscal:              ['',],
      items: this.fb.array([]),
    });
    this.formDetalle = this.fb.group({
      id:                         [null,],
      idActividadPresupuestaria:  ['',],
      idProducto:                 ['',],
      idSubproducto:              ['',],
      nombreSubproducto:          ['',]
    });
  }

  // agregar o editar item
  agregarEditarItem(){
    // this.items.push( this.fb.control('', Validators.required ) );
    console.log('this.formDetalle', this.formDetalle.getRawValue());
    if (this.editarDetalleIndice === -1) { // crear
      if(this.params.id){
        this.encabezadoService.crear(this.formDetalle.getRawValue()).subscribe((respuesta: any) => {
          this.items.push(
            this.fb.group(respuesta)
          );
          this.formDetalle.reset();
        })
      } else {
        const subproducto = this.subproductos.find((subproducto) => subproducto.id == this.formDetalle.get('idSubproducto').value)
        console.log('subproducto', subproducto, this.formDetalle.get('idSubproducto').value);
        this.formDetalle.get('nombreSubproducto').setValue(subproducto.nombre);
        this.items.push(
          this.fb.group(this.formDetalle.getRawValue())
        );
        this.formDetalle.reset();
        this.formDetalle.get('idSubproducto').setValue('');
      }
    } else { // editar
      if(this.params.id){
        console.log('object');
        this.encabezadoService.actualizar(this.formDetalle.getRawValue()).subscribe((respuesta: any) => {
          console.log('respuesta', respuesta);
          this.items.setControl(
            this.editarDetalleIndice,
            this.fb.group(respuesta)
          );
          this.editarDetalleIndice = -1;
          this.formDetalle.reset();
        })
      } else {
        this.items.setControl(
          this.editarDetalleIndice,
          this.fb.group(this.formDetalle.getRawValue())
        );
        this.editarDetalleIndice = -1;
        this.formDetalle.reset();
      }   
    }
  }

  editarItem(i: any){
    console.log('i', i, this.items);
    this.editarDetalleIndice = i;
    const item = this.items.at(i) as FormGroup
    this.formDetalle.patchValue(item.getRawValue())
  }

  eliminarItem(i: number ){
    console.log('i', i);
    if(this.params.id){
      const item = this.items.at(i) as FormGroup
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
          this.encabezadoService.eliminar(item.get('id').value).subscribe((respuesta: any) => {
            this.items.removeAt(i);
          })
        }
      })  
    } else {
      this.items.removeAt(i);
    }
    this.formDetalle.reset();
  }

  //metodo cuando el usuario presione click en guardar
  cargarPrograma(): void {
    this.encabezadoService.listadoProgramas().subscribe((respuesta) => {
      this.programas = respuesta;
    });
  }    

  //método para obtener la dependencia del usuario logado
  public cargarDependencia(): void {
    this.dependenciaService.get(parseInt(localStorage.getItem('cui'))).subscribe((respuesta) => {
      this.dependenciaUsuario = respuesta;
      console.log('dependencia usuario', this.dependenciaUsuario);
    });   
  }

  //obtener los departamentos de la dependencia a la que el usuario logado pertenece
  public cargarDepartamentos(): void {
    this.departamentosService.get(parseInt(localStorage.getItem('cui'))).subscribe((respuesta) => {
      this.departamentosUsuario = respuesta;
    });   
  }

  cargarResultadoInstitucional(): void {
    this.encabezadoService.listadoResultadoInstitucional().subscribe((respuesta) => {
      this.resultadoInstitucional = respuesta;
    });
  }  

  cargarActividades(programa: number): void {
    this.encabezadoService.listadoActividades(programa).subscribe((respuesta) => {
      this.actividades = respuesta;
      console.log('actividades', this.actividades);
    });
  }   
  
  cargarProductos(resultado): void {
    this.encabezadoService.listadoProductos(resultado).subscribe((respuesta) => {
      this.productos = respuesta;
    });
  } 

  cargarSubproductos(producto): void {
    this.encabezadoService.listadoSubproductos(producto).subscribe((respuesta) => {
      this.subproductos = respuesta;
    });
  } 

  enviarFormulario(form: any) {
    console.log('resultado', form.value);
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }

  public crear(form: any) {
    this.form.get('idDependencia').setValue(this.dependenciaUsuario.id)
    console.log('formulario antes de enviarlo al servicio', form.value);  
    this.encabezadoService.crear(form.value).subscribe((data) => {
      console.log('encabezado completo', form.value);
      Swal.fire({
        icon: 'success',
        title: 'Encabezado creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    // console.log('actualizar', form.value);  
    this.encabezadoService.actualizar(form.value).subscribe((data) => {
      // console.log('datos listado', data);
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title:     'Acción modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
    });
  } 

  limpiarTabla(){
    this.items.clear();
  }
}
