import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'ngx-error-formulario',
  templateUrl: './error-formulario.component.html',
  styleUrls: ['./error-formulario.component.scss']
})
export class ErrorFormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Favor revisar que la información esté ingresada correctamente',
    })  
  }
  }


