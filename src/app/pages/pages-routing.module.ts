import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AccionesComponent } from './acciones/acciones.component';
import { RevisionComponent } from './poa/revision/revision.component';
import { AprobacionComponent } from './poa/aprobacion/aprobacion.component';
import { ReportesComponent } from './poa/reportes/reportes.component';
import { RolComponent } from './rol/rol.component';
import { PoaComponent } from './poa/poa.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { EncabezadoComponent } from './poa/encabezado/encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { AccionComponent } from './acciones/accion/accion.component';
import { ProgramacionComponent } from './poa/programaciones/programacion/programacion.component';
import { ReprogramacionComponent } from './poa/reprogramaciones/reprogramacion/reprogramacion.component';
import { ProgramacionesComponent} from './poa/programaciones/programaciones.component'
import { DefinicionEjesComponent } from './poa/ejes/definicion-ejes/definicion-ejes.component';
import { EjesComponent } from './poa/ejes/ejes.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'encabezado/crear',
      component: EncabezadoComponent,
    },
    {
      path: 'encabezado/:id',
      component: EncabezadoComponent,
    },
    {
      path: 'ejes',
      component: EjesComponent,
    },
    {
      path: 'ejes/crear',
      component: DefinicionEjesComponent,
    },
    {
      path: 'acciones',
      component: AccionesComponent,
    },
    {
      path: 'acciones/crear',
      component: AccionComponent,
    },
    {
      path: 'acciones/:id',
      component: AccionComponent,
    },
    {
      path: 'programaciones',
      component: ProgramacionesComponent,
    },
    {
      path: 'programaciones/crear',
      component: ProgramacionComponent,
    },
    {
      path: 'programaciones/:id',
      component: ProgramacionComponent,
    },
    // {
    //   path: 'reprogramaciones',
    //   // component: ReprogramacionComponent,
    // },
    {
      path: 'reprogramaciones/crear',
      component: ReprogramacionComponent,
    },
    {
      path: 'reprogramaciones/id',
      component: ReprogramacionComponent,
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
      redirectTo: 'acciones',
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
