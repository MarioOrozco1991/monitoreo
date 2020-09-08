import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProgramacionesService } from '../../../services/programaciones.service';
@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './programacion-metas.component.html',
  styleUrls: ['./programacion-metas.component.scss']
})
export class ProgramacionMetasComponent implements OnInit {

  mostrarTareas: boolean = false;

  mostrarNombreSistema: boolean = false;

  forma: FormGroup;

  respuesta: any

  constructor(public programacionesService:ProgramacionesService, 
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
  }
  
  
  crearFormulario(){
      //inicializando el formulario

      this.forma = this.fb.group({
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
      })
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
  public crearProgramacion(forma: any) {
    // JSON.parse(JSON.stringify(forma));
    console.log('agregando', forma.value);  
    this.programacionesService.crearProgramacionMetas(forma.value).subscribe((data) => {
    console.log('datos listado', data);
    this.respuesta = data;
    }
  )}

  public actualizarProgramacion(forma: any) {
    // JSON.parse(JSON.stringify(forma));
    console.log('agregando', forma.value);  
    this.programacionesService.crearProgramacionMetas(forma).subscribe((data) => {
    console.log('datos listado', data);
    this.respuesta = data;
    }
  )}


}

