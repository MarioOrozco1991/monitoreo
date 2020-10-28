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

  //validaciones del formulario
  get resultadoInvalido(){
    return this.form.get('idResultadoInstitucional').invalid && this.form.get('idResultadoInstitucional').touched
  }

  get nombreInvalido(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  get unidadMedidaInvalido(){
    return this.form.get('idUnidadMedida').invalid && this.form.get('idUnidadMedida').touched
  }
  
  //defincion del formulario
  crearFormulario(){
    this.form = this.fb.group({
      id:                         [null,],
      idResultadoInstitucional:   ['', Validators.required],
      nombre:                     ['', Validators.required],
      idUnidadMedida:             ['', Validators.required],
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
      this.productosService.crear(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Producto creado exitosamente',
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
      this.router.navigate(['/pages/productos'])
      this.productosService.actualizar(form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Producto modificado exitosamente',
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
