import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccionesService} from './../../../../../services/acciones.service'
import { ProgramacionesService } from './../../../../../services/programaciones.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'ngx-programacion-acciones',
  templateUrl: './programacion-accion-poa.component.html',
  styleUrls: ['./programacion-accion-poa.component.scss']
})
export class ProgramacionAccionPoaComponent implements OnInit {

  mostrarNombreSistema: boolean = false;
  acciones: any[];

  public form: FormGroup;

  respuesta: any;
  
    
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private programacionesService: ProgramacionesService, 
              private accionesService: AccionesService,
              private fb:FormBuilder) {
  
    this.crearFormulario();

    //   this.forma.controls.enero.valueChanges
    //   .subscribe(data => {
    //     console.log('PrecioCIVA = ' + data)
    //   })

    //   //observable general
    // this.forma.valueChanges
    // .subscribe(data => {
    //   console.log(data)
    // })
  }
      
  ngOnInit(): void {
    this.cargarProgramacion();
    this.cargarAccion();
  }
  
  
  crearFormulario(){
    //inicializando el formulario
  
    this.form = this.fb.group({
      id:                          [null,],
      periodo:                     ['',],
      accion:                      ['',],
      enero:                       ['',],
      febrero:                     ['',],
      marzo:                       ['',],
      abril:                       ['',],
      mayo:                        ['',],
      junio:                       ['',],
      julio:                       ['',],
      agosto:                      ['',],
      septiembre:                  ['',],
      octubre:                     ['',],
      noviembre:                   ['',],
      diciembre:                   ['',],
      totalProgramado:             ['',],
    });
  }

  calcularProgramado() {
    return (parseInt(this.form.value.enero) + (parseInt(this.form.value.febrero)) + 
           (parseInt(this.form.value.marzo)) + (parseInt(this.form.value.abril)) +
           (parseInt(this.form.value.mayo)) + (parseInt(this.form.value.junio)) +
           (parseInt(this.form.value.julio)) + (parseInt(this.form.value.agosto)) +
           (parseInt(this.form.value.septiembre)) + (parseInt(this.form.value.octubre)) +
           (parseInt(this.form.value.noviembre)) + (parseInt(this.form.value.diciembre)))
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
    this.form.reset();
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

  public cargarAccion(): void {
    this.accionesService.listado().subscribe((respuesta) => {
      this.acciones= respuesta;
    });   
  }

}
