/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './@theme/components/components.module';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { AuthGuard } from './auth-guard.service';




import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbTabsetModule,
  NbTooltipModule,
  NbCardModule,
  NbInputModule
} from '@nebular/theme';





@NgModule({
  declarations: [AppComponent,],

  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbTooltipModule,
    ComponentsModule,
    PagesModule,
    ReactiveFormsModule,
    DataTablesModule,
    NbInputModule,


    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://172.21.26.175:8090/biometric-explorer',
          login: {
            // ...
            endpoint: '/authenticate',
          },
          token: {
            class: NbAuthJWTToken,

            key: 'jwttoken', // this parameter tells where to look for the token
          }
        }),
      ],
      forms: {},
    }),
  ],

  providers: [
    AuthGuard
  ],

  bootstrap: [AppComponent],
})
export class AppModule {
}
