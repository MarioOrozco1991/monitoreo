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
import { PoaComponent } from './poa/poa.component';
import { SeguimientoActividadesComponent } from './seguimiento-actividades/seguimiento-actividades.component';
import { CrearEncabezadoComponent } from './poa/crear-encabezado/crear-encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { AccionesComponent } from './acciones/acciones.component';
import { AccionComponent } from './acciones/accion/accion.component';
import { ProgramacionComponent } from './poa/programaciones/programacion/programacion.component';
import { ReprogramacionComponent } from './poa/reprogramaciones/reprogramacion/reprogramacion.component';
import { DefinicionEjesComponent } from './poa/definicion-ejes/definicion-ejes.component';
import { ProgramacionesComponent } from './poa/programaciones/programaciones.component';


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
    PoaComponent,
    SeguimientoActividadesComponent,
    CrearEncabezadoComponent,
    EditarEncabezadoComponent,
    AccionComponent,
    ProgramacionComponent,
    ReprogramacionComponent,
    DefinicionEjesComponent,
    ProgramacionesComponent,
  ],
})
export class PagesModule {
}
