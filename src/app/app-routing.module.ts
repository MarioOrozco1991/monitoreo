import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';

import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: './auth/auth.module#NgxAuthModule',
  },
  {
    path: 'pages',
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
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
