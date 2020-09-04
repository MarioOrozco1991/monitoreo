import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {PoaService} from '../../../../services/poa.service';
@Component({
  selector: 'ngx-crear-accion',
  templateUrl: './crear-accion.component.html',
  styleUrls: ['./crear-accion.component.scss']
})
export class CrearAccionComponent implements OnInit {

  mostrarTareas: boolean = false;

  mostrarNombreSistema: boolean = false;

  forma: FormGroup;

  constructor(private poaService: PoaService, 
              private fb:FormBuilder) {
  
      this.crearFormulario();
  
  }
      
      
      
  ngOnInit(): void {
  }
  
  get tareas(){
      return this.forma.get('tareas') as FormArray;
  }
  
  
  crearFormulario(){
      //inicializando el formulario

      this.forma = this.fb.group({
          ejeEstrategico:        ['', Validators.required],
          objetivoEstrategico:   ['',],
          objetivoOperativo:     ['',],
          responsable:           ['',],
          accion:                ['',],
          departamentoRealiza:   ['',],
          puestoRealiza:         ['',],
          dependenciaRealiza:    ['',],
          actividad:             ['',],
          documentoEntrada:      ['',],
          otroDocumentoEntrada:  ['',],
          dependenciaSolicita:   ['',],
          puestoSolicita:        ['',],
          resultadoDocumento:    ['',],
          otroResultado:         ['',],
          dependenciaRecibe:     ['',],
          puestoRecibe:          ['',],
          unidadTiempo:          ['',],
          duracion:              ['',],
          utilizaSistema:        ['',],
          nombreSistema:         ['',],
          observaciones:         ['',],
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
      console.log(this.forma.value);
      return false; //para cancelar la recarga de la pantalla ya que no se esta enviando al servidor

  }
}
