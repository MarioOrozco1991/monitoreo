import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AccionesComponent } from './acciones/acciones.component';
import { RevisionComponent } from './poa/revision/revision.component';
import { AprobacionComponent } from './poa/aprobacion/aprobacion.component';
import { ReportesComponent } from './poa/reportes/reportes.component';
import { RolComponent } from './rol/rol.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { EncabezadoComponent } from './poa/encabezado/encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { AccionComponent } from './acciones/accion/accion.component';
import { ProgramacionComponent } from './poa/programaciones/programacion/programacion.component';
import { ProgramacionesComponent} from './poa/programaciones/programaciones.component'
import { ReprogramacionComponent } from './poa/reprogramaciones/reprogramacion/reprogramacion.component';
import { ReprogramacionesComponent } from './poa/reprogramaciones/reprogramaciones.component';
import { EjeComponent } from './poa/ejes/eje/eje.component';
import { EjesComponent } from './poa/ejes/ejes.component';
import { ObjetivosOperativosComponent } from './poa/objetivos-operativos/objetivos-operativos.component';
import { ObjetivoOperativoComponent } from './poa/objetivos-operativos/objetivo-operativo/objetivo-operativo.component';
import { ObjetivosEstrategicosComponent } from './poa/objetivos-estrategicos/objetivos-estrategicos.component';
import { ObjetivoEstrategicoComponent } from './poa/objetivos-estrategicos/objetivo-estrategico/objetivo-estrategico.component';

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
      component: EjeComponent,
    },
    {
      path: 'ejes/:id',
      component: EjeComponent,
    },
    {
      path: 'objetivos-operativos',
      component: ObjetivosOperativosComponent,
    },
    {
      path: 'objetivos-operativos/crear',
      component: ObjetivoOperativoComponent,
    },
    {
      path: 'objetivos-operativos/:id',
      component: ObjetivoOperativoComponent,
    },
    {
      path: 'objetivos-estrategicos',
      component: ObjetivosEstrategicosComponent,
    },
    {
      path: 'objetivos-estrategicos/crear',
      component: ObjetivoEstrategicoComponent,
    },
    {
      path: 'objetivos-estrategicos/:id',
      component: ObjetivoEstrategicoComponent,
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
    {
      path: 'reprogramaciones',
      component: ReprogramacionesComponent,
    },
    {
      path: 'reprogramaciones/crear',
      component: ReprogramacionComponent,
    },
    {
      path: 'reprogramaciones/:id',
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
