import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'ngx-definicion-ejes',
  templateUrl: './definicion-ejes.component.html',
  styleUrls: ['./definicion-ejes.component.scss']
})
export class DefinicionEjesComponent implements OnInit {

  mostrarNombreSistema: boolean = false;

  form: FormGroup;

  constructor( private fb:FormBuilder) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
  }
  
  get tareas(){
    return this.form.get('tareas') as FormArray;
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      tipoCreacion:        ['',],
      ejeEstrategico:      ['',],
      objetivoEstrategico: ['',],
      objetivoOperativo:   ['',],
    })
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
    console.log(this.form.value);
    return false; //para cancelar la recarga de la pantalla ya que no se esta enviando al servidor
  }

}
