import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PoaService } from '../../../../services/poa.service'

@Component({
  selector: 'ngx-listado-programaciones',
  templateUrl: './listado-programaciones.component.html',
  styleUrls: ['./listado-programaciones.component.scss']
})
export class ListadoProgramacionesComponent implements OnInit {

  datos: any;

  dtOptions: DataTables.Settings = {};
    
  dtTrigger = new Subject();

  respuesta: any;

  constructor(private http:HttpClient, 
              private router:Router,
              public poaService:PoaService){

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.poaService.listadoProgramaciones().subscribe((data: any) => {
      console.log('datos listado', data);
       this.respuesta = data
      this.dtTrigger.next();
    });

  }

  public eliminar(): void {

    console.log('click eliminar');
  
   this.poaService.eliminarProgramacion(this.respuesta.id).subscribe((data) => {
     console.log('registro eliminado', this.respuesta)
   }
   )
}
  
  ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
  }

  editarProceso(){
      this.router.navigate(["editar"]);
  }

}
