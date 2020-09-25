import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { AccionesComponent } from './poa/acciones/acciones.component';
import { RevisionComponent } from './poa/revision/revision.component';
import { AprobacionComponent } from './poa/aprobacion/aprobacion.component';
import { ReportesComponent } from './poa/reportes/reportes.component';
import { RolComponent } from './rol/rol.component';
import { EncabezadoComponent } from './poa/encabezado/encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { AccionComponent } from './poa/acciones/accion/accion.component';
import { ProgramacionMetasPoaComponent } from './poa/metas-fisicas/programaciones/programacion/programacion-metas-poa.component';
import { ProgramacionesMetasPoaComponent} from './poa/metas-fisicas/programaciones/programaciones-metas-poa.component';
import { EjeComponent } from './poa/ejes/eje/eje.component';
import { EjesComponent } from './poa/ejes/ejes.component';
import { ObjetivosOperativosComponent } from './poa/objetivos-operativos/objetivos-operativos.component';
import { ObjetivoOperativoComponent } from './poa/objetivos-operativos/objetivo-operativo/objetivo-operativo.component';
import { ObjetivosEstrategicosComponent } from './poa/objetivos-estrategicos/objetivos-estrategicos.component';
import { ObjetivoEstrategicoComponent } from './poa/objetivos-estrategicos/objetivo-estrategico/objetivo-estrategico.component';
import { ProgramacionesAccionesPoaComponent } from './poa/acciones/programaciones/programaciones-acciones-poa.component';
import { ProgramacionAccionPoaComponent } from './poa/acciones/programaciones/programacion-accion/programacion-accion-poa.component';

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
      path: 'programaciones-metas-poa',
      component: ProgramacionesMetasPoaComponent,
    },
    {
      path: 'programaciones-metas-poa/crear',
      component: ProgramacionMetasPoaComponent,
    },
    {
      path: 'programaciones-metas-poa/:id',
      component: ProgramacionMetasPoaComponent,
    },
    {
      path: 'programacion-acciones-poa',
      component: ProgramacionesAccionesPoaComponent,
    },
    {
      path: 'programacion-acciones-poa/crear',
      component: ProgramacionAccionPoaComponent,
    },
    {
      path: 'programacion-acciones-poa/:id',
      component: ProgramacionAccionPoaComponent,
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
