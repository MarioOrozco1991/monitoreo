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
import { ProgramacionesAccionesPomComponent } from './pom/acciones/programaciones/programaciones-acciones-pom.component';
import { ProgramacionAccionPomComponent } from './pom/acciones/programaciones/programacion/programacion-accion-pom.component';
import { ProgramacionesMetasPomComponent } from './pom/metas-fisicas/programaciones/programaciones-metas-pom.component';
import { ProgramacionMetasPomComponent } from './pom/metas-fisicas/programaciones/programacion/programacion-metas-pom.component';
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

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'centros-de-costo',
      component: CentrosDeCostoComponent,
    },
    {
      path: 'centros-de-costo/crear',
      component: CentroDeCostoComponent,
    },
    {
      path: 'centros-de-costo/:id',
      component: CentroDeCostoComponent,
    },
    {
      path: 'resultados-institucionales',
      component: ResultadosInstitucionalesComponent,
    },
    {
      path: 'resultados-institucionales/crear',
      component: ResultadoInstitucionalComponent,
    },
    {
      path: 'resultados-institucionales/:id',
      component: ResultadoInstitucionalComponent,
    },
    {
      path: 'politicas-publicas',
      component: PoliticasPublicasComponent,
    },
    {
      path: 'politicas-publicas/crear',
      component: PoliticaPublicaComponent,
    },
    {
      path: 'politicas-publicas/:id',
      component: PoliticaPublicaComponent,
    },
    {
      path: 'politicas-gobierno',
      component: PoliticasGobiernoComponent,
    },
    {
      path: 'politicas-gobierno/crear',
      component: PoliticaGobiernoComponent,
    },
    {
      path: 'politicas-gobierno/:id',
      component: PoliticaGobiernoComponent,
    },
    {
      path: 'productos',
      component: ProductosComponent,
    },
    {
      path: 'productos/crear',
      component: ProductoComponent,
    },
    {
      path: 'productos/:id',
      component: ProductoComponent,
    },
    {
      path: 'subproductos',
      component: SubproductosComponent,
    },
    {
      path: 'subproductos/crear',
      component: SubproductoComponent,
    },
    {
      path: 'subproductos/:id',
      component: SubproductoComponent,
    },
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
      path: 'programacion-acciones-pom',
      component: ProgramacionesAccionesPomComponent,
    },
    {
      path: 'programacion-acciones-pom/crear',
      component: ProgramacionAccionPomComponent,
    },
    {
      path: 'programacion-acciones-pom/:id',
      component: ProgramacionAccionPomComponent,
    },
    {
      path: 'programaciones-metas-pom',
      component: ProgramacionesMetasPomComponent,
    },
    {
      path: 'programaciones-metas-pom/crear',
      component: ProgramacionMetasPomComponent,
    },
    {
      path: 'programaciones-metas-pom/:id',
      component: ProgramacionMetasPomComponent,
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
},
{
  path: 'login',
  component: LoginComponent
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
exports: [RouterModule,],
})
export class PagesRoutingModule {
}
