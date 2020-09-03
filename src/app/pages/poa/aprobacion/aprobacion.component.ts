import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-aprobacion',
  templateUrl: './aprobacion.component.html',

})
export class AprobacionComponent implements OnDestroy, OnInit {

    dtOptions: DataTables.Settings = {};
    
    dtTrigger = new Subject();

    url = 'http://localhost:8081/api/programacion-metas';

    data: any;

    constructor(private http:HttpClient, 
                private router:Router){

    }
    
    ngOnInit(): void {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
          };
          this.http.get(this.url)
          .subscribe((respuesta: any) => {
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

