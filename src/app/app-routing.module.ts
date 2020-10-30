import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'autentic',
    component: LoginComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#NgxAuthModule',
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
