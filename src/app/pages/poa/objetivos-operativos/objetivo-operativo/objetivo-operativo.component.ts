import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ObjetivosOperativosService } from './../../../../services/objetivos-operativos.service';
import { ObjetivosEstrategicosService } from './../../../../services/objetivos-estrategicos.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-objetivo-operativo',
  templateUrl: './objetivo-operativo.component.html',
  styleUrls: ['./objetivo-operativo.component.scss']
})
export class ObjetivoOperativoComponent implements OnInit {

  objetivosEstrategicos: any[];
  respuesta: any;
  form: FormGroup;
  formDetalle: FormGroup;

  constructor( private fb:FormBuilder,
               public objetivosOperativosService:ObjetivosOperativosService,
               public objetivosEstrategicosService:ObjetivosEstrategicosService,
               private router: Router,
               private activatedRoute: ActivatedRoute,) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.cargarObjetivoEstrategico();
    this.mostrarObjetivo();
  }
  
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  crearFormulario(){
    this.form = this.fb.group({
      id:                     [null,],
      idObjetivoEstrategico:  ['',],
      items: this.fb.array([]),
    });
    this.formDetalle = this.fb.group({
      nombre:                 ['',]
    });
  }
  
  // agregar item
  agregarItem(){
    // this.items.push( this.fb.control('', Validators.required ) );
    console.log('this.formDetalle', this.formDetalle.getRawValue());
    this.items.push(
      this.fb.group(this.formDetalle.getRawValue())
    );
    this.formDetalle.reset();
  }

  editarItem(i: any){
    console.log('i', i, this.items);
    const item = this.items.at(i) as FormGroup
    this.formDetalle.patchValue(item.getRawValue())
  }

  eliminarItem(i: number ){
    console.log('i', i);
    this.items.removeAt(i);
    this.formDetalle.reset();
  }

  enviarFormulario(form: any) {
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }

  public crear(form: any) {
    this.objetivosOperativosService.crear(form.value).subscribe((data) => {
      // console.log(form.value);
      Swal.fire({
        icon: 'success',
        title: 'Objetivo creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
    this.form.reset();
    this.formDetalle.reset();
    this.items.clear();
  }

  public actualizar(form: any) {
    this.objetivosOperativosService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Objetivo modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrarObjetivo(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.objetivosOperativosService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }
  //muestra el nombre del ohjetivo estratégico cuando deseen crear o editar un objetivo operativo
  cargarObjetivoEstrategico(): void {
    this.objetivosEstrategicosService.listado().subscribe((respuesta) => {
      this.objetivosEstrategicos = respuesta;
    });
  }      

}
