
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ProgramacionesService } from '../../../../services/programaciones.service';

@Component({
  selector: 'ngx-editar-programacion',
  templateUrl: './editar-programacion.component.html',
  styleUrls: ['./editar-programacion.component.scss']
})
export class EditarProgramacionComponent implements OnInit {

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
        otroMedioVerificacion:       ['',],
        indicador:                   ['',],
        formulaIndicador:            ['',],
        enero:                       ['',],
        febrero:                     ['',],
        marzo:                       ['',],
        abril:                       ['',],
        totalPrimerCuatrimestre:     ['',],
        mayo:                        ['',],
        junio:                       ['',],
        julio:                       ['',],
        agosto:                      ['',],
        totalSegundoCuatrimestre:    ['',],
        septiembre:                  ['',],
        octubre:                     ['',],
        noviembre:                   ['',],
        diciembre:                   ['',],
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
  public crear() {
    // JSON.parse(JSON.stringify(this.forma));
    console.log('agregando', this.forma.value);  
    this.programacionesService.crearProgramacionMetas(this.forma).subscribe((data) => {
    console.log('datos listado', data);
    this.respuesta = data;
  }
)}



}
