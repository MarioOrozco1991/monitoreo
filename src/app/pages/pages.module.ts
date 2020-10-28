//modulos
import { NgModule } from '@angular/core';
import { NbMenuModule, NbIconModule, } from '@nebular/theme';
import { NbTabsetModule, NbTooltipModule, NbCardModule} from '@nebular/theme';
import { ComponentsModule } from '../@theme/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


//componentes
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { RevisionComponent } from './poa/revision/revision.component';
import { AprobacionComponent } from './poa/aprobacion/aprobacion.component';
import { CrearComponent } from './crear/crear.component';
import { RolComponent } from './rol/rol.component';
import { ReportesComponent } from './poa/reportes/reportes.component';
import { EncabezadoComponent } from './poa/encabezado/encabezado.component';
import { EditarEncabezadoComponent } from './poa/editar-encabezado/editar-encabezado.component';
import { AccionesComponent } from './poa/acciones/acciones.component';
import { AccionComponent } from './poa/acciones/accion/accion.component';
import { ProgramacionMetasPoaComponent } from './poa/metas-fisicas/programaciones/programacion/programacion-metas-poa.component';
import { ProgramacionesMetasPoaComponent } from './poa/metas-fisicas/programaciones/programaciones-metas-poa.component';
import { EjeComponent } from './poa/ejes/eje/eje.component';
import { EjesComponent } from './poa/ejes/ejes.component';
import { ObjetivosOperativosComponent } from './poa/objetivos-operativos/objetivos-operativos.component';
import { ObjetivosEstrategicosComponent } from './poa/objetivos-estrategicos/objetivos-estrategicos.component';
import { ObjetivoOperativoComponent } from './poa/objetivos-operativos/objetivo-operativo/objetivo-operativo.component';
import { ObjetivoEstrategicoComponent } from './poa/objetivos-estrategicos/objetivo-estrategico/objetivo-estrategico.component';
import { ProgramacionAccionPoaComponent } from './poa/acciones/programaciones/programacion-accion/programacion-accion-poa.component';
import { ProgramacionesAccionesPomComponent } from './pom/acciones/programaciones/programaciones-acciones-pom.component';
import { ProgramacionAccionPomComponent } from './pom/acciones/programaciones/programacion/programacion-accion-pom.component';
import { ProgramacionesAccionesPoaComponent } from './poa/acciones/programaciones/programaciones-acciones-poa.component';
import { ProgramacionMetasPomComponent } from './pom/metas-fisicas/programaciones/programacion/programacion-metas-pom.component';
import { ProgramacionesMetasPomComponent } from './pom/metas-fisicas/programaciones/programaciones-metas-pom.component';
import { CentrosDeCostoComponent } from './poa/centros-de-costo/centros-de-costo.component';
import { CentroDeCostoComponent } from './poa/centros-de-costo/centro-de-costo/centro-de-costo.component';
import { ResultadosInstitucionalesComponent } from './poa/resultados-institucionales/resultados-institucionales.component';
import { ResultadoInstitucionalComponent } from './poa/resultados-institucionales/resultado-institucional/resultado-institucional.component';
import { ProductosComponent } from './poa/productos/productos.component';
import { ProductoComponent } from './poa/productos/producto/producto.component';
import { SubproductosComponent } from './poa/subproductos/subproductos.component';
import { SubproductoComponent } from './poa/subproductos/subproducto/subproducto.component';
import { PoliticasGobiernoComponent } from './poa/politicas-gobierno/politicas-gobierno.component';
import { PoliticaGobiernoComponent } from './poa/politicas-gobierno/politica-gobierno/politica-gobierno.component';
import { PoliticasPublicasComponent } from './poa/politicas-publicas/politicas-publicas.component';
import { PoliticaPublicaComponent } from './poa/politicas-publicas/politica-publica/politica-publica.component';
import { LoginComponent } from './login/login.component';


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
    BsDatepickerModule.forRoot(),
    

  ],
  declarations: [
    PagesComponent,
    AccionesComponent,
    RevisionComponent,
    AprobacionComponent,
    ReportesComponent,
    CrearComponent,
    RolComponent,
    EncabezadoComponent,
    EditarEncabezadoComponent,
    AccionComponent,
    ProgramacionMetasPoaComponent,
    EjeComponent,
    ProgramacionesMetasPoaComponent,
    EjesComponent,
    ObjetivosOperativosComponent,
    ObjetivosEstrategicosComponent,
    ObjetivoOperativoComponent,
    ObjetivoEstrategicoComponent,
    ProgramacionAccionPoaComponent,
    ProgramacionesAccionesPomComponent,
    ProgramacionAccionPomComponent,
    ProgramacionesAccionesPoaComponent,
    ProgramacionMetasPomComponent,
    ProgramacionesMetasPomComponent,
    CentrosDeCostoComponent,
    CentroDeCostoComponent,
    ResultadosInstitucionalesComponent,
    ResultadoInstitucionalComponent,
    ProductosComponent,
    ProductoComponent,
    SubproductosComponent,
    SubproductoComponent,
    PoliticasGobiernoComponent,
    PoliticaGobiernoComponent,
    PoliticasPublicasComponent,
    PoliticaPublicaComponent,
    LoginComponent,
  ],
})
export class PagesModule {
}
