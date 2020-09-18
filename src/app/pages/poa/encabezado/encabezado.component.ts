import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EncabezadoService } from '../../../services/encabezado.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-crear-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  mostrarNombreSistema: boolean = false;

  programas: any[]; 
  subprogramas: any[];
  actividades: any[]; 
  productos: any[]; 
  subproductos: any[];
  resultadoInstitucional: any[];

  form: FormGroup;

  constructor( private fb:FormBuilder,
               public encabezadoService:EncabezadoService,
               private router: Router,
               private activatedRoute: ActivatedRoute
  ) {
      this.crearFormulario();
  }  
      
  ngOnInit(): void {
    this.cargarPrograma(); //preguntar de que forma se podria reducir este codigo para que no mande a llamar a todas la funciones cuando carga la app
    this.cargarActividad();
    this.cargarProducto();
    this.cargarSubproducto();
    this.cargarSubprograma();
    this.cargarResultadoInstitucional();
  }
    
  crearFormulario(){
    
    this.form = this.fb.group({
      id:                       [null,],
      programaPresupuestario:   ['',],
      subprograma:              ['',],
      resultaoInstitucional:    ['',],
      dependenciaResponsable:   ['',],
      actividadPresupuestaria:  ['',],
      producto:                 ['',],
      subproducto:              ['',],
    })
  }

  agregarActividad(){
      
  }

  //metodo cuando el usuario presione click en guardar
  cargarPrograma(): void {
    this.encabezadoService.listadoProgramas().subscribe((respuesta) => {
      this.programas = respuesta;
    });
  }    
  
  cargarSubprograma(): void {
    this.encabezadoService.listadoSubrogramas().subscribe((respuesta) => {
      this.subprogramas = respuesta;
    });
  }    

  cargarResultadoInstitucional(): void {
    this.encabezadoService.listadoResultadoInstitucional().subscribe((respuesta) => {
      this.resultadoInstitucional = respuesta;
    });
  }  
  

  cargarActividad(): void {
    this.encabezadoService.listadoActividades().subscribe((respuesta) => {
      this.actividades = respuesta;
    });
  }   
  
  cargarProducto(): void {
    this.encabezadoService.listadoProductos().subscribe((respuesta) => {
      this.productos = respuesta;
    });
  } 

  cargarSubproducto(): void {
    this.encabezadoService.listadoSubproductos().subscribe((respuesta) => {
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
    // console.log('agregando', form.value);  
    this.encabezadoService.crear(form.value).subscribe((data) => {
      // console.log('resultado desde crear', data);
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
        title: 'Acción modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
    });
  } 
}
