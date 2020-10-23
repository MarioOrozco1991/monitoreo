import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from './../../../../services/productos.service';
import { ResultadosInstitucionalesService } from './../../../../services/resultados-institucionales.service';
import { UnidadMedidaService } from './../../../../services/unidad-medida.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  respuesta: any;
  listadoResultados: any[];
  listadoUnidadMedida: any[];
  form: FormGroup;

  constructor( private fb:FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private productosService: ProductosService,
               private unidadMedidaService: UnidadMedidaService,
               private resultadosInstitucionalesService: ResultadosInstitucionalesService) {
    this.crearFormulario();
  }    
      
  ngOnInit(): void {
    this.mostrar();
    this.cargarResultadoInstitucional();
    this.cargarUnidadMedida();
  }
  
  crearFormulario(){
    this.form = this.fb.group({
      id:                         [null,],
      idResultadoInstitucional:   ['',],
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
    this.productosService.crear(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Producto creado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }

  public actualizar(form: any) {
    this.productosService.actualizar(form.value).subscribe((data) => {
      Swal.fire({
        icon: 'success',
        title: 'Producto modificado exitosamente',
        showConfirmButton: false,
        timer: 3000
      })
    });
  }
  
  //metodo que carga la información del objetivo a modificar
  mostrar(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params.id){
        this.productosService.get(params.id).subscribe((respuesta) => {
          this.form.patchValue(respuesta);
        });
      }       
    });
  }

  public cargarResultadoInstitucional(): void {
    this.resultadosInstitucionalesService.listado().subscribe((respuesta) => {
      this.listadoResultados = respuesta;  
    });   
  }

  public cargarUnidadMedida(): void {
    this.unidadMedidaService.listado().subscribe((respuesta) => {
      this.listadoUnidadMedida = respuesta;  
    });   
  }

}
