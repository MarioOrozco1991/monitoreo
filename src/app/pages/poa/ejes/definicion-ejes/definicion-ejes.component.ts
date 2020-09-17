import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { EjesService } from '../../../../services/ejes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'ngx-definicion-ejes',
  templateUrl: './definicion-ejes.component.html',
  styleUrls: ['./definicion-ejes.component.scss']
})
export class DefinicionEjesComponent implements OnInit {

  mostrarNombreObjetivoEstrategico: boolean = false;

  mostrarNombreSistema: boolean = false;

  ejesEstrategicos: any[];

  objetivosEstrategicos: any[];

  form: FormGroup;

  constructor( private fb:FormBuilder,
               public ejesService:EjesService,
               private router: Router,
               private activatedRoute: ActivatedRoute,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.cargarEjeEstrategico();
    this.cargarObjetivoEstrategico();
  }
  
  get nombreObjetivoEstrategico(){
    return this.form.get('nombreObjetivoEstrategico') as FormArray;
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      tipoCreacion:        ['',],
      ejeEstrategico:      ['',],
      objetivoEstrategico: ['',],
      objetivoOperativo:   ['',],
      nombreObjetivoEstrategico: this.fb.array([])
    })
  }
  
   //agregando los objetivos estrategicos al arreglo
  agregarObjetivoEstrategico(){
    this.nombreObjetivoEstrategico.push( this.fb.control('', Validators.required ) );
  }

  eliminarObjetivoEstrategico(i: number ){
    this.nombreObjetivoEstrategico.removeAt(i);
  }

  

  //metodo cuando el usuario presione click en guardar
  guardar(){
    console.log('agregando');
    console.log(this.form.value);
    return false; //para cancelar la recarga de la pantalla ya que no se esta enviando al servidor
  }

  //consumiendo servicios
  cargarEjeEstrategico(): void {
    this.ejesService.listadoEjeEstrategico().subscribe((respuesta) => {
      this.ejesEstrategicos = respuesta;
    });
  }     
  
  cargarObjetivoEstrategico(): void {
    this.ejesService.listadoObjetivoEstrategico().subscribe((respuesta) => {
      this.objetivosEstrategicos = respuesta;
    });
  }   

}
