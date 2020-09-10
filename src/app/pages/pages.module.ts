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
import { DashboardModule } from './dashboard/dashboard.module';
import { RevisionComponent } from './poa/revision/revision.component';
import { AprobacionComponent } from './poa/aprobacion/aprobacion.component';
import { CrearComponent } from './crear/crear.component';
import { RolComponent } from './rol/rol.component';
import { ReportesComponent } from './poa/reportes/reportes.component';
import { PoaComponent } from './poa/poa.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { CrearEncabezadoComponent } from './poa/crear-encabezado/crear-encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { CrearAccionComponent } from './poa/acciones/crear-accion/crear-accion.component';
import { ProgramacionMetasComponent } from './poa/programacion-metas/programacion-metas.component';
import { ReprogramacionMetasComponent } from './poa/reprogramacion-metas/reprogramacion-metas.component';
import { DefinicionEjesComponent } from './poa/definicion-ejes/definicion-ejes.component';
import { ListadoProgramacionesComponent } from './poa/programacion-metas/listado-programaciones/listado-programaciones.component';
import { EditarAccionComponent } from './poa/acciones/editar-accion/editar-accion.component';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
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
    RevisionComponent,
    AprobacionComponent,
    ReportesComponent,
    CrearComponent,
    RolComponent,
    PoaComponent,
    SeguimientoActividadesComponent,
    CrearEncabezadoComponent,
    EditarEncabezadoComponent,
    CrearAccionComponent,
    ProgramacionMetasComponent,
    ReprogramacionMetasComponent,
    DefinicionEjesComponent,
    ListadoProgramacionesComponent,
    EditarAccionComponent,
    
  ],
})
export class PagesModule {
}
