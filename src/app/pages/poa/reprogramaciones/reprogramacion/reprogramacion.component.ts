import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './reprogramacion.component.html',
  styleUrls: ['./reprogramacion.component.scss']
})
export class ReprogramacionComponent implements OnInit {


  mostrarNombreSistema: boolean = false;

  forma: FormGroup;

  constructor( private fb:FormBuilder) {
  
      this.crearFormulario();
  
  }
      
  ngOnInit(): void {
  }
 


  //validaciones del formulario
  
  // get procesoNoValido(){
  //     return this.forma.get('proceso').invalid && this.forma.get('procesoPOA').touched
  // }
 
  // get alcanceNoValido(){
  //     return this.forma.get('alcance').invalid && this.forma.get('alcance').touched
  // }

  // get objetivoNoValido(){
  //     return this.forma.get('objetivo').invalid && this.forma.get('objetivo').touched
  // }

  // get observacionesNoValido(){
  //     return this.forma.get('observaciones').invalid && this.forma.get('observaciones').touched
  
  // }
  
  
  crearFormulario(){
      //inicializando el formulario

      this.forma = this.fb.group({
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
}

