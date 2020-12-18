import { Component, OnInit, TemplateRef  } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccionesService} from './../../../../../services/acciones.service'
import { ProgramacionesService } from './../../../../../services/programaciones.service';


@Component({
  selector: 'ngx-ver-programaciones',
  templateUrl: './ver-programaciones.component.html',
  styleUrls: ['./ver-programaciones.component.scss']
})
export class VerProgramacionesComponent implements OnInit {

  id: any;
  programaciones: any[];
  acciones: any[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private accionesService: AccionesService,
              public programacionesService:ProgramacionesService, 
              private fb:FormBuilder
             ) {
  }

  ngOnInit(): void {
    this.cargarProgramaciones()
  }

  cargarProgramaciones(): void {
    if(this.id){
      console.log('desde cargar programaciones', this.id);
      this.accionesService.accionConProgramacionesPoa(this.id).subscribe((respuesta: any) => {
        this.programaciones = respuesta;
        console.log('programaciones cargadas', this.programaciones);
      });
    }       
  }

}

