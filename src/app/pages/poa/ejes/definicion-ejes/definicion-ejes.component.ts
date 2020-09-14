import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'ngx-definicion-ejes',
  templateUrl: './definicion-ejes.component.html',
  styleUrls: ['./definicion-ejes.component.scss']
})
export class DefinicionEjesComponent implements OnInit {

  mostrarActividad: boolean = false;

  mostrarNombreSistema: boolean = false;

  form: FormGroup;

  constructor( private fb:FormBuilder) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
  }
  
  get actividades(){
    return this.form.get('actividades') as FormArray;
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      tipoCreacion:        ['',],
      ejeEstrategico:      ['',],
      objetivoEstrategico: ['',],
      objetivoOperativo:   ['',],
      actividades: this.fb.array([])
    })
  }
  
   //agregando las tareas
  agregarActividad(){
    this.actividades.push( this.fb.control('', Validators.required ) );
  }

  eliminarActividad(i: number ){
    this.actividades.removeAt(i);
  }

  

  //metodo cuando el usuario presione click en guardar
  guardar(){
    //validacion si el usuario presiona guardar y tiene campos sin llenar
    // if(this.forma.invalid){
        
    //     return this.forma.markAllAsTouched();
        
    // }
    console.log('agregando');
    console.log(this.form.value);
    return false; //para cancelar la recarga de la pantalla ya que no se esta enviando al servidor
  }

}
