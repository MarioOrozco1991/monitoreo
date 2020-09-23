//modulos
import { NgModule } from '@angular/core';
import { NbMenuModule, NbIconModule, } from '@nebular/theme';
import { NbTabsetModule, NbTooltipModule, NbCardModule} from '@nebular/theme';
import { ComponentsModule } from '../@theme/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';


//componentes
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { RevisionComponent } from './poa/revision/revision.component';
import { AprobacionComponent } from './poa/aprobacion/aprobacion.component';
import { CrearComponent } from './crear/crear.component';
import { RolComponent } from './rol/rol.component';
import { ReportesComponent } from './poa/reportes/reportes.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { EncabezadoComponent } from './poa/encabezado/encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { AccionesComponent } from './acciones/acciones.component';
import { AccionComponent } from './acciones/accion/accion.component';
import { ProgramacionComponent } from './poa/programaciones/programacion/programacion.component';
import { ReprogramacionComponent } from './poa/reprogramaciones/reprogramacion/reprogramacion.component';
import { EjeComponent } from './poa/ejes/eje/eje.component';
import { ProgramacionesComponent } from './poa/programaciones/programaciones.component';
import { EjesComponent } from './poa/ejes/ejes.component';
import { ObjetivosOperativosComponent } from './poa/objetivos-operativos/objetivos-operativos.component';
import { ObjetivosEstrategicosComponent } from './poa/objetivos-estrategicos/objetivos-estrategicos.component';
import { ObjetivoOperativoComponent } from './poa/objetivos-operativos/objetivo-operativo/objetivo-operativo.component';
import { ObjetivoEstrategicoComponent } from './poa/objetivos-estrategicos/objetivo-estrategico/objetivo-estrategico.component';
import { ReprogramacionesComponent } from './poa/reprogramaciones/reprogramaciones.component';


@NgModule({
  imports: [
  PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbIconModule,
    NbTooltipModule,
    ReactiveFormsModule,
    DataTablesModule,
    ComponentsModule,
    RouterModule,
  ],
  declarations: [
    PagesComponent,
    AccionesComponent,
    RevisionComponent,
    AprobacionComponent,
    ReportesComponent,
    CrearComponent,
    RolComponent,
    SeguimientoActividadesComponent,
    EncabezadoComponent,
    EditarEncabezadoComponent,
    AccionComponent,
    ProgramacionComponent,
    ReprogramacionComponent,
    EjeComponent,
    ProgramacionesComponent,
    EjesComponent,
    ObjetivosOperativosComponent,
    ObjetivosEstrategicosComponent,
    ObjetivoOperativoComponent,
    ObjetivoEstrategicoComponent,
    ReprogramacionesComponent,
  ],
})
export class PagesModule {
}
