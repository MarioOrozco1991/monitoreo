import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ReprogramacionesService } from '../../../../services/reprogramaciones.service';
import { EncabezadoService } from '../../../../services/encabezado.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './reprogramacion.component.html',
  styleUrls: ['./reprogramacion.component.scss']
})
export class ReprogramacionComponent implements OnInit {


  mostrarNombreSistema: boolean = false;

  public form: FormGroup;

  respuesta: any;
  productos: any[];
  subproductos: any[];
    
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private reprogramacionesService:ReprogramacionesService, 
              private encabezadoService: EncabezadoService,
              private fb:FormBuilder) {
  
    this.crearFormulario();

    //   this.forma.controls.enero.valueChanges
    //   .subscribe(data => {
    //     console.log('PrecioCIVA = ' + data)
    //   })

    //   //observable general
    // this.forma.valueChanges
    // .subscribe(data => {
    //   console.log(data)
    // })
  }
      
  ngOnInit(): void {
    this.cargarReprogramacion();
    this.cargarProducto();
    this.cargarSubproducto();
  }
  
  
  crearFormulario(){
    //inicializando el formulario
  
    this.form = this.fb.group({
id:                       [null,],
  tipoReprogramacion:       ['',],
  idProducto:             ['',],
  idSubproducto:          ['',],
  periodo:                ['',],
  mesReprogramar:         ['',],
  cantidadProgramada:     ['',],
  programacionRequerida:  ['',],
  nuevaProgramacion:      ['',],
  justificacion:          ['',],
    });
  }

//   calcularProgramado() {
//     //return ((this.forma.value.enero + (this.forma.value.febrero) + (this.forma.value.marzo) + (this.forma.value.abril)))
//     return (this.forma.value.enero )
//    }
 
//   totalProgramado(){
//     console.log('cambio');
//     this.forma.get('totalPrimerCuatrimestre')
//       .setValue(this.calcularProgramado());
//   }
  

  cargarReprogramacion(): void {
    this.activatedRoute.params.subscribe(params => {

      if(params.id){
        this.reprogramacionesService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

  public crear(form: any) {
    this.reprogramacionesService.crear(form.value).subscribe((data) => {
      console.log('datos listado', data);
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Reprogramación creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.reprogramacionesService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Reprogramación modificada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  enviarFormulario(form: any) {
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
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

