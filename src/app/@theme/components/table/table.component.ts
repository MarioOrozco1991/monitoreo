import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PoaService } from './../../../services/poa.service';

// import {AccionesService} from '../../../services/acciones.service';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',

})
export class TableComponent implements OnDestroy, OnInit {

    dtOptions: DataTables.Settings = {};
    
    respuesta: any;

    dtTrigger = new Subject();

    constructor(public poaService:PoaService,
                private http:HttpClient, 
                private router:Router){
    }
    
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10
      };
  
      this.poaService.listadoAcciones().subscribe((data: any) => {
        console.log('listado de acciones', data);
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
