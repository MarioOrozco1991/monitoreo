import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SubproductosService } from './../../../../services/subproductos.service';
import { ProductosService } from './../../../../services/productos.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-subproducto',
  templateUrl: './subproducto.component.html',
  styleUrls: ['./subproducto.component.scss']
})
export class SubproductoComponent implements OnInit {

  respuesta: any;
  listadoProductos: any[];
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private subproductosService: SubproductosService,
               private productosService: ProductosService) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
    this.cargarProducto();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:                         [null,],
      idProducto:                 ['',],
      nombre:                     ['',],
      idUnidadMedida:             ['',],
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
    this.subproductosService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Subproducto creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.subproductosService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Subproducto modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
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

}
