import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'ngx-crear-encabezado',
  templateUrl: './crear-encabezado.component.html',
  styleUrls: ['./crear-encabezado.component.scss']
})
export class CrearEncabezadoComponent implements OnInit {

  
  mostrarTareas: boolean = false;

  mostrarNombreSistema: boolean = false;

  forma: FormGroup;

  constructor( private fb:FormBuilder) {
  
      this.crearFormulario();
  
  }
      
      
      
  ngOnInit(): void {
  }
  
  get tareas(){
      return this.forma.get('tareas') as FormArray;
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
          resultadoInstitucional:        ['',],
          producto:           ['',],
          subproducto:         ['',],
          dependencia:              ['', Validators.required],
      
          tareas: this.fb.array([])
      })
  }


  //agregando las tareas
  agregarTarea(){
      this.tareas.push( this.fb.control('', Validators.required ) );

  }

  eliminarTarea(i: number ){
      this.tareas.removeAt(i);
  }

  agregarActividad(){
      
  }

  //metodo cuando el usuario presione click en guardar
  guardar(){
      //validacion si el usuario presiona guardar y tiene campos sin llenar
      // if(this.forma.invalid){
          
      //     return this.forma.markAllAsTouched();
          
      // }
      console.log('agregando');
      console.log(this.forma);
      return false; //para cancelar la recarga de la pantalla ya que no se esta enviando al servidor

  }

}
