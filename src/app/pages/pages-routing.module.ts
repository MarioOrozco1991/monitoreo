import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrearComponent } from './crear/crear.component';
import { RevisionComponent } from './revision/revision.component';
import { AprobacionComponent } from './aprobacion/aprobacion.component';
import { ReportesComponent } from './reportes/reportes.component';
import { RolComponent } from './rol/rol.component';
import { PoaComponent } from './poa/poa.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { CrearEncabezadoComponent } from './crear-encabezado/crear-encabezado.component';
import { EditarEncabezadoComponent } from './editar-encabezado/editar-encabezado.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
        path: 'crear-encabezado',
        component: CrearEncabezadoComponent,
    },
    {
      path: 'editar-encabezado',
      component: EditarEncabezadoComponent,
  },
    {
      path: 'crear-accion',
      component: CrearComponent,
    },
    {
        path: 'editar',
        component: EditarEncabezadoComponent,
    },
    {
      path: 'revision',
      component: RevisionComponent,
    },
    {
        path: 'aprobacion',
        component: AprobacionComponent,
    },
    {
        path: 'reportes',
        component: ReportesComponent,
    },
    {
        path: 'rol',
        component: RolComponent,
    },
    {
      path: 'seguimiento-actividades',
      component: SeguimientoActividadesComponent,
    },
    {
        path: 'poa',
        component: PoaComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
exports: [RouterModule,],
})
export class PagesRoutingModule {
}
