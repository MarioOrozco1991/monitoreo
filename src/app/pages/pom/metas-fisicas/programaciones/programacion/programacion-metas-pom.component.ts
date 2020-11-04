import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../../../../services/productos.service'
import { SubproductosService } from './../../../../../services/subproductos.service';
import { ProgramacionesService } from './../../../../../services/programaciones.service';
import { BsDatepickerConfig, BsDatepickerViewMode, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-programacion-metas-pom',
  templateUrl: './programacion-metas-pom.component.html',
  styleUrls: ['./programacion-metas-pom.component.scss']
})
export class ProgramacionMetasPomComponent implements OnInit {

  productos: any[];
  subproductos: any[];
  form: FormGroup;
  formDetalle: FormGroup;
  respuesta: any;
  editarDetalleIndice: number = -1;
  locale = 'es';
  //year = new Date().getFullYear();
  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private bsLocaleService: BsLocaleService,
              private productosService: ProductosService,
              private subproductosService: SubproductosService,
              public programacionesService:ProgramacionesService, 
              private fb:FormBuilder
             ) {
                this.bsLocaleService.use('es');//fecha en español, datepicker  
                this.crearFormulario();
  }
  

    //   this.forma.controls.enero.valueChanges
    //   .subscribe(data => {
    //     console.log('PrecioCIVA = ' + data)
    //   })

    //   //observable general
    // this.forma.valueChanges
    // .subscribe(data => {
    //   console.log(data)
    // })
  
      
    ngOnInit(): void {
      this.cargarProgramacion();
      this.cargarProducto();
      this.cargarSubproducto();
    }
    
    get items(): FormArray {
      return this.form.get('items') as FormArray;
    }
    
    crearFormulario(){
      //inicializando el formulario
      this.form = this.fb.group({
        id:                 [null,],
        tipoProgramacion:   [null,],
        idProducto:         ['',],
        idSubproducto:      ['',],
        items: this.fb.array([]),
      });
      this.formDetalle = this.fb.group({
        fechaInicio:      ['',],
        fechaFin:         ['',],
        valorProgramado:  ['',]
      });
    }
  
    // agregar o editar item
    agregarEditarItem(){
      // this.items.push( this.fb.control('', Validators.required ) );
      console.log('this.formDetalle', this.formDetalle.getRawValue());
      if (this.editarDetalleIndice === -1) { // crear
        this.items.push(
          this.fb.group(this.formDetalle.getRawValue())
        );
      } else { // editar
        this.items.setControl(
          this.editarDetalleIndice,
          this.fb.group(this.formDetalle.getRawValue())
        );
        this.editarDetalleIndice = -1;
      }
      this.formDetalle.reset();
    }
    
    editarItem(i: any){
      console.log('i', i, this.items);
      this.editarDetalleIndice = i;
      const item = this.items.at(i) as FormGroup
      this.formDetalle.patchValue(item.getRawValue())
    }
  
    eliminarItem(i: number ){
      console.log('i', i);
      this.items.removeAt(i);
      this.formDetalle.reset();
    }
  
    public cargarProducto(): void {
      this.productosService.listado().subscribe((respuesta) => {
        this.productos= respuesta;
      });   
    }

    public cargarSubproducto(): void {
      this.subproductosService.listado().subscribe((respuesta) => {
        this.subproductos= respuesta;
      });   
    }
  
    cargarProgramacion(): void {
      console.log('desde cargrar programacion');
      this.activatedRoute.params.subscribe(params => {
        if(params.id){
          this.programacionesService.get(params.id).subscribe((respuesta) => {
            this.form.patchValue(respuesta);
          });
        }       
      });
    }
  
    public crear(form: any) {
      console.log('formulario',form.value);
      this.programacionesService.crear(form.value).subscribe((data) => {
        console.log('datos listado', data);
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Programación creada exitosamente',
          showConfirmButton: false,
          timer: 3000
        })
      });
    }
  
    public actualizar(form: any) {
      this.programacionesService.actualizar(form.value).subscribe((data) => {
        Swal.fire({
          //position: 'top-end',
          icon: 'success',
          title: 'Programación modificada exitosamente',
          showConfirmButton: false,
          timer: 3000
        })
      });
    }
  
    enviarFormulario(form: any) {
      if (!this.form.value.id) {
        this.crear(form);
      } else {
        this.actualizar(form);
      }
    }

}
