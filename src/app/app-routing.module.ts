import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { EditarProcesoComponent } from './@theme/components/editar-proceso/editar-proceso.component';
import { NgModule } from '@angular/core';
import {
    NbAuthComponent,
    NbLoginComponent,
    NbLogoutComponent,
    NbRegisterComponent,
    NbRequestPasswordComponent,
    NbResetPasswordComponent,
} from '@nebular/auth';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
      {
        path: 'editar',
        component: EditarProcesoComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
//   { path: '/editar', component: EditarProcesoComponent },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,   //para quitarle el # en la ruta (dirección)
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],




exports: [RouterModule],
})
export class AppRoutingModule {
}
