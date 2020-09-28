import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProgramacionesService } from './../../../../../services/programaciones.service';
import { EncabezadoService } from './../../../../../services/encabezado.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-programacion-metas-pom',
  templateUrl: './programacion-metas-pom.component.html',
  styleUrls: ['./programacion-metas-pom.component.scss']
})
export class ProgramacionMetasPomComponent implements OnInit {

  public form: FormGroup;

  respuesta: any;
  productos: any[];
  subproductos: any[];
    
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public programacionesService:ProgramacionesService, 
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
    this.cargarProgramacion();
    this.cargarProducto();
    this.cargarSubproducto();
  }
  
  
  crearFormulario(){
    //inicializando el formulario
  
    this.form = this.fb.group({
      id:                          [null,],
      tipoProgramacion:            ['',],
      periodo:                     ['',],
      idProducto:                  ['',],
      idSubproducto:               ['',],
      unidadMedida:                ['',],
      medioVerificacion:           ['',],
      // otroMedioVerificacion:       ['',],
      indicador:                   ['',],
      formulaIndicador:            ['',],
      enero:                       ['',],
      febrero:                     ['',],
      marzo:                       ['',],
      abril:                       ['',],
      mayo:                        ['',],
      junio:                       ['',],
      julio:                       ['',],
      agosto:                      ['',],
      septiembre:                  ['',],
      octubre:                     ['',],
      noviembre:                   ['',],
      diciembre:                   ['',],
      totalPrimerCuatrimestre:     ['',],
      totalSegundoCuatrimestre:    ['',],
      totalTercerCuatrimestre:     ['',],
      totalProgramado:             ['',],
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
  

  cargarProgramacion(): void {
    console.log('desde cargrar programacion');
    this.activatedRoute.params.subscribe(params => {

      if(params.id){
        this.programacionesService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

  public crear(form: any) {
    this.programacionesService.crear(form.value).subscribe((data) => {
      console.log('datos listado', data);
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Programación creada exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.programacionesService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        //position: 'top-end',
        icon: 'success',
        title: 'Programación modificada exitosamente',
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
