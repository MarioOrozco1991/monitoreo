import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EncabezadoService } from './../../../../services/encabezado.service';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './reprogramacion.component.html',
  styleUrls: ['./reprogramacion.component.scss']
})
export class ReprogramacionComponent implements OnInit {


  mostrarNombreSistema: boolean = false;
  productos: any[];
  subproductos: any[];

  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private encabezadoService: EncabezadoService
             ) {
                  this.crearFormulario();
  }
      
  ngOnInit(): void {
    this.cargarProducto();
    this.cargarSubproducto();
  }
   
  crearFormulario(){
      this.form = this.fb.group({
        tipoReprogramacion:       ['', Validators.required],
        periodo:                  ['',],
        accion:                   ['',],
        mesProgramacion:          ['',],
        cantidadProgramada:       ['',],
        programacionRequerida:    ['',],
        nuevaProgramacion:        ['',],
        justificacion:            ['',],
      })
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
    this.encabezadoService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Reprogramacion creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });

  }

  public actualizar(form: any) {
    this.encabezadoService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Reprogramacion modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['..']);
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
}

