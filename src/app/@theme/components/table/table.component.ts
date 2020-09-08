import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AccionesService } from './../../../services/acciones.service';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',

})
export class TableComponent implements OnDestroy, OnInit {

    dtOptions: DataTables.Settings = {};
    
    respuesta: any;

    dtTrigger = new Subject();

    constructor(public accionesService:AccionesService,
                private http:HttpClient, 
                private router:Router){
    }
    
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      };
  
      this.accionesService.listadoAcciones().subscribe((data: any) => {
         this.respuesta = data
        this.dtTrigger.next();
      });
  
    }
  
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
  
    editarProceso(){
        this.router.navigate(["editar"]);
    }

}
