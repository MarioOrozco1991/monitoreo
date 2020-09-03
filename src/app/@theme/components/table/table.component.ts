import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import {AccionesService} from '../../../services/acciones.service';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',

})
export class TableComponent implements OnDestroy, OnInit {

    dtOptions: DataTables.Settings = {};
    
    url: string = 'http://localhost:8081/api/acciones';

    dtTrigger = new Subject();

    data: any;

    constructor(private http:HttpClient, 
                private router:Router){

    }
    
    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
          };
          this.http.get(this.url).subscribe((respuesta: any) => {
            console.log('info', respuesta);
              this.data = respuesta;
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
