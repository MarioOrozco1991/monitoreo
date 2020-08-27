import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-table',
  templateUrl: './table.component.html',

})
export class TableComponent implements OnDestroy, OnInit {

    dtOptions: DataTables.Settings = {};
    
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
          this.http.get('http://dummy.restapiexample.com/api/v1/employees')
          .subscribe((respuesta: any) => {
              this.data = respuesta.data;
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
