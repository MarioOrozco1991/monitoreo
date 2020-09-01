//modulos
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NbTabsetModule, NbTooltipModule, NbCardModule} from '@nebular/theme';
import { ComponentsModule } from '../@theme/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { DataTablesModule } from 'angular-datatables';


//componentes
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RevisionComponent } from './revision/revision.component';
import { AprobacionComponent } from './aprobacion/aprobacion.component';
import { CrearComponent } from './crear/crear.component';
import { RolComponent } from './rol/rol.component';
import { ReportesComponent } from './reportes/reportes.component';
import { PoaComponent } from './poa/poa.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { CrearEncabezadoComponent } from './crear-encabezado/crear-encabezado.component';
import { EditarEncabezadoComponent } from './editar-encabezado/editar-encabezado.component';
import { CrearAccionComponent } from './crear-accion/crear-accion.component';
import { ProgramacionMetasComponent } from './programacion-metas/programacion-metas.component';
import { ReprogramacionMetasComponent } from './reprogramacion-metas/reprogramacion-metas.component';

@NgModule({
  imports: [



    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbTabsetModule,
    NbCardModule,
    NbTooltipModule,
    ReactiveFormsModule,
    DataTablesModule,
    ComponentsModule,
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
    ReprogramacionMetasComponent
    
  ],
})
export class PagesModule {
}
