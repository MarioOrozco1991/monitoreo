import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './programacion-metas.component.html',
  styleUrls: ['./programacion-metas.component.scss']
})
export class ProgramacionMetasComponent implements OnInit {

  mostrarTareas: boolean = false;

  mostrarNombreSistema: boolean = false;

  forma: FormGroup;

  constructor( private fb:FormBuilder) {
  
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
        tipoProgramacion:        ['', Validators.required],
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
          tareas: this.fb.array([])
      })
  }

//   calcularProgramado() {
//     //return ((this.forma.value.enero + (this.forma.value.febrero) + (this.forma.value.marzo) + (this.forma.value.abril)))
//     return (this.forma.value.enero )
//    }
 

  //metodo cuando el usuario presione click en guardar
  guardar(){
      //validacion si el usuario presiona guardar y tiene campos sin llenar
      // if(this.forma.invalid){
          
      //     return this.forma.markAllAsTouched();
          
      // }
      console.log('agregando');
      console.log(this.forma.value);
      return false; //para cancelar la recarga de la pantalla ya que no se esta enviando al servidor

  }

//   totalProgramado(){
//     console.log('cambio');
//     this.forma.get('totalPrimerCuatrimestre')
//       .setValue(this.calcularProgramado());
//   }
}

