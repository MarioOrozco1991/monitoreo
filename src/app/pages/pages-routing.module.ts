import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevisionComponent } from './poa/revision/revision.component';
import { AprobacionComponent } from './poa/aprobacion/aprobacion.component';
import { ReportesComponent } from './poa/reportes/reportes.component';
import { RolComponent } from './rol/rol.component';
import { PoaComponent } from './poa/poa.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { CrearEncabezadoComponent } from './poa/crear-encabezado/crear-encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { CrearAccionComponent } from './poa/acciones/crear-accion/crear-accion.component';
import { ProgramacionMetasComponent } from './poa/programacion-metas/programacion-metas.component';
import { ReprogramacionMetasComponent } from './poa/reprogramacion-metas/reprogramacion-metas.component';
import { ListadoProgramacionesComponent} from './poa/programacion-metas/listado-programaciones/listado-programaciones.component'
import { DefinicionEjesComponent } from './poa/definicion-ejes/definicion-ejes.component';

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
      component: CrearAccionComponent,
    },
    {
        path: 'editar',
        component: EditarEncabezadoComponent,
    },
    {
        path: 'crear-programacion',
        component: ProgramacionMetasComponent,
    },
    {
      path: 'reprogramacion',
      component: ReprogramacionMetasComponent,
    },
    {
      path: 'listado-programaciones',
      component: ListadoProgramacionesComponent,
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
      path: 'crear-ejes',
      component: DefinicionEjesComponent,
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
