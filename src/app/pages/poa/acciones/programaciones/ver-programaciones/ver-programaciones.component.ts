import { Component, OnInit} from '@angular/core';
import { AccionesService} from './../../../../../services/acciones.service'
import { NbDialogRef } from '@nebular/theme';


@Component({
  selector: 'ngx-ver-programaciones',
  templateUrl: './ver-programaciones.component.html',
  styleUrls: ['./ver-programaciones.component.scss']
})
export class VerProgramacionesComponent implements OnInit {

  id: any;
  programaciones: any[];
  acciones: any[];

  constructor(protected dialogRef : NbDialogRef<any>,
              private accionesService: AccionesService,
             ) {
  }

  ngOnInit(): void {
    this.cargarProgramaciones()
  }

  //carga las programaciones de la acción que se le pasa
  cargarProgramaciones(): void {
    if(this.id){
      console.log('desde cargar programaciones', this.id);
      this.accionesService.accionConProgramacionesPoa(this.id).subscribe((respuesta: any) => {
        this.programaciones = respuesta;
        console.log('programaciones cargadas', this.programaciones);
      });
    }       
  }

  //metodo para cerrar el diálogo
  close(){
    this.dialogRef.close();
  }

}

