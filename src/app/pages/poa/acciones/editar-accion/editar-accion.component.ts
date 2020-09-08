import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {ProgramacionesService} from '../../../../services/programaciones.service';
@Component({
  selector: 'ngx-editar-accion',
  templateUrl: './editar-accion.component.html',
  styleUrls: ['./editar-accion.component.scss']
})
export class EditarAccionComponent implements OnInit {


  mostrarNombreSistema: boolean = false;

  forma: FormGroup;

  constructor(private poaService: ProgramacionesService, 
              private fb:FormBuilder) {
  
      this.crearFormulario();
  
  }
      
  ngOnInit(): void {
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
