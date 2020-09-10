import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProgramacionesService } from '../../../services/programaciones.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './programacion-metas.component.html',
  styleUrls: ['./programacion-metas.component.scss']
})
export class ProgramacionMetasComponent implements OnInit {

  mostrarTareas: boolean = false;

  mostrarNombreSistema: boolean = false;

  public forma: FormGroup;

  respuesta: any;
  
    
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              public programacionesService:ProgramacionesService, 
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
    console.log('init');
    this.cargarProgramacion();
  }
  
  
  crearFormulario(){
    //inicializando el formulario
  
    this.forma = this.fb.group({
      id:                          [null,],
      tipoProgramacion:            ['',],
      periodo:                     ['',],
      accion:                      ['',],
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
    
    // console.log('agregando', forma.value);  
    
    //const id= this.activatedRoute.snapshot.paramMap.get('id');
    console.log('cargarProgramacion');
    this.activatedRoute.params.subscribe(params => {

      if(params.id){
        this.programacionesService.getProgramacion(params.id).subscribe((respuesta) => {
          console.log('respuesta', respuesta);
          this.forma.patchValue(respuesta);
        });
      }       
    });
  }

  public crear(forma: any) {
    console.log('agregando', forma.value);  
    this.programacionesService.crearProgramacionMetas(forma.value).subscribe((data) => {
      console.log('datos listado', data);
    });
  }

  public actualizar(forma: any) {
    console.log('actualizar', forma.value);  
    this.programacionesService.actualizarProgramacion(forma.value).subscribe((data) => {
      console.log('datos listado', data);
    });
  }

  enviarFormulario(forma: any) {
    if (!this.forma.value.id) {
      this.crear(forma);
    } else {
      this.actualizar(forma);
    }
  }
  
    
//   public cargarProgramacion(): void {
    
//     // console.log('agregando', forma.value);  
//     this.programacionesService.getProgramacion(forma).subscribe((data) => {
//         console.log('datos listado', data);
//         this.respuesta = data;
//     }
//   )}

}

