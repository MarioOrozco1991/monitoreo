import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubproductosService } from './../../../../services/subproductos.service';
import { ProductosService } from './../../../../services/productos.service';
import { UnidadMedidaService } from './../../../../services/unidad-medida.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-subproducto',
  templateUrl: './subproducto.component.html',
  styleUrls: ['./subproducto.component.scss']
})
export class SubproductoComponent implements OnInit {

  respuesta: any;
  listadoProductos: any[];
  listadoUnidadMedida: any[];
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private subproductosService: SubproductosService,
               private unidadMedidaService: UnidadMedidaService,
               private productosService: ProductosService) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
    this.cargarProducto();
    this.cargarUnidadMedida();
  }
  
  //validaciones del formulario
  get productoInvalido(){
    return this.form.get('idProducto').invalid && this.form.get('idProducto').touched
  }

  get nombreInvalido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  get unidadMedidaInvalido(){
    return this.form.get('idUnidadMedida').invalid && this.form.get('idUnidadMedida').touched
  }

  crearFormulario(){
    this.form = this.fb.group({
      id:                         [null,],
      idProducto:                 ['', Validators.required],
      nombre:                     ['', Validators.required],
      idUnidadMedida:             ['', Validators.required],
      estado:                     ['']
    });
  }
  
  enviarFormulario(form: any) {
    if (!this.form.value.id) {
      this.crear(form);
    } else {
      this.actualizar(form);
    }
  }

  public crear(form: any) {
    if(this.form.status ==='VALID'){
      this.form.get('estado').setValue(1);
      this.subproductosService.crear(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Subproducto creado exitosamente',
          showConfirmButton: false,
          timer: 3000
        })
      });
      this.form.reset();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Favor revisar que la información esté ingresada correctamente',
      })  
    }
  }

  public actualizar(form: any) {
    if(this.form.status ==='VALID'){
      this.router.navigate(['/pages/subproductos'])
      this.subproductosService.actualizar(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Subproducto modificado exitosamente',
          showConfirmButton: false,
          timer: 3000
        })
      });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Favor revisar que la información esté ingresada correctamente',
      })  
    }
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrar(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.subproductosService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

  public cargarProducto(): void {
    this.productosService.listado().subscribe((respuesta) => {
      this.listadoProductos = respuesta;  
    });   
  }


  public cargarUnidadMedida(): void {
    this.unidadMedidaService.listado().subscribe((respuesta) => {
      this.listadoUnidadMedida = respuesta;  
    });   
  }

}
